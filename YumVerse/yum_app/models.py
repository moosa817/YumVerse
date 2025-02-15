from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now, timedelta
import random
from yum_app.ai_funcs import analyze_health_profile


# Create your models here.
class User(AbstractUser):
    first_name = None
    last_name = None
    name = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(unique=True, blank=False, null=False)
    google = models.BooleanField(default=False)
    google_id = models.CharField(max_length=255, blank=True, null=True)

    password_reset_code = models.CharField(max_length=6, blank=True, null=True)
    code_generated_at = models.DateTimeField(blank=True, null=True)
    pfp = models.ImageField(upload_to="profile_pictures/", blank=True, null=True)

    def generate_reset_code(self):

        self.password_reset_code = f"{random.randint(100000, 999999)}"
        self.code_generated_at = now()
        self.save()

    def is_reset_code_valid(self):
        if self.code_generated_at:
            return now() - self.code_generated_at < timedelta(
                minutes=10
            )  # Example: 10 minutes
        return False


class Recipe(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="recipes")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    ingredients = models.TextField()  # Store ingredients as a newline-separated list
    steps = models.TextField()  # Store steps as a numbered list or JSON structure
    prep_time = models.PositiveIntegerField(help_text="Preparation time in minutes")
    cook_time = models.PositiveIntegerField(help_text="Cooking time in minutes")
    servings = models.PositiveIntegerField(default=1)
    privacy = models.BooleanField(
        default=False, help_text="Check for private, uncheck for public"
    )
    image = models.ImageField(upload_to="recipe_images/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Nutritional Information (optional fields)
    calories = models.FloatField(blank=True, null=True)
    protein = models.FloatField(blank=True, null=True, help_text="Grams of protein")
    carbs = models.FloatField(blank=True, null=True, help_text="Grams of carbohydrates")
    fats = models.FloatField(blank=True, null=True, help_text="Grams of fats")

    def __str__(self):
        return f"{self.title} by {self.user.username}"


# AI BASED PREFERENCE


class UserHealthProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # Link to user
    height_cm = models.FloatField()  # Height in cm
    weight_kg = models.FloatField()  # Weight in kg
    age = models.PositiveIntegerField()
    additional_info = models.TextField(blank=True, null=True)  # Extra user details

    bmi = models.FloatField(editable=False, null=True)  # Auto-calculated BMI
    maintenance_calories = models.FloatField(null=True, blank=True)
    recommended_carbs = models.FloatField(null=True, blank=True)
    recommended_fats = models.FloatField(null=True, blank=True)
    recommended_protein = models.FloatField(null=True, blank=True)

    def save(self, *args, **kwargs):
        """Calculate BMI and get AI-based recommendations before saving."""
        if self.height_cm and self.weight_kg:
            height_m = self.height_cm / 100
            self.bmi = round(self.weight_kg / (height_m**2), 2)

        # Call AI model
        ai_result = analyze_health_profile(self)

        print(ai_result)
        if not ai_result:
            raise ValueError("AI model failed to return results.")

        # Store AI results
        self.maintenance_calories = ai_result["maintenance_calories"]
        self.recommended_carbs = ai_result["recommended_macros"]["carbs"]
        self.recommended_fats = ai_result["recommended_macros"]["fats"]
        self.recommended_protein = ai_result["recommended_macros"]["protein"]

        super().save(*args, **kwargs)  # Save updated fields
