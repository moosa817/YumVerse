from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now, timedelta
import random


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
