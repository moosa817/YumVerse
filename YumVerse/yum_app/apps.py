from django.apps import AppConfig
from storages.backends.s3boto3 import S3Boto3Storage
from django.core.files.storage import default_storage


class YumAppConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "yum_app"

    def ready(self):
        """Override default storage at runtime."""
        default_storage._wrapped = S3Boto3Storage()
