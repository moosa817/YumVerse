from django.contrib import admin
from yum_app.models import User, Recipe, UserHealthProfile

# Register your models here.
admin.site.register(User)
admin.site.register(Recipe)
admin.site.register(UserHealthProfile)
