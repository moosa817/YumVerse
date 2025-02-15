# Generated by Django 5.1.6 on 2025-02-15 16:46

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yum_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('ingredients', models.TextField()),
                ('steps', models.TextField()),
                ('prep_time', models.PositiveIntegerField(help_text='Preparation time in minutes')),
                ('cook_time', models.PositiveIntegerField(help_text='Cooking time in minutes')),
                ('servings', models.PositiveIntegerField(default=1)),
                ('privacy', models.BooleanField(default=False, help_text='Check for private, uncheck for public')),
                ('image', models.ImageField(blank=True, null=True, upload_to='recipe_images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('calories', models.FloatField(blank=True, null=True)),
                ('protein', models.FloatField(blank=True, help_text='Grams of protein', null=True)),
                ('carbs', models.FloatField(blank=True, help_text='Grams of carbohydrates', null=True)),
                ('fats', models.FloatField(blank=True, help_text='Grams of fats', null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
