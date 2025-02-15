"""
Django settings for yum_project project.

Generated by 'django-admin startproject' using Django 5.1.6.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path
import dj_database_url
from dotenv import load_dotenv
from . import config
from storages.backends.s3boto3 import S3Boto3Storage
from datetime import timedelta


load_dotenv()
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

CONFIG = config

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = CONFIG.SECRET_KEY

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "yum_app",
    "storages",
    "corsheaders",
    "rest_framework",
    "drf_spectacular",
    "whitenoise.runserver_nostatic",
    "rest_framework_simplejwt",
]


MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
]

ROOT_URLCONF = "yum_project.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "yum_project.wsgi.application"

# custom user model
AUTH_USER_MODEL = "yum_app.User"

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

# this gets overwritten
DATABASES = {"default": {}}

# requires a env for db str (using postgressql)

DATABASES["default"] = dj_database_url.config(conn_max_age=600, ssl_require=False)


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"

# aws s3bucket config

AWS_ACCESS_KEY_ID = CONFIG.AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = CONFIG.AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME = CONFIG.AWS_STORAGE_BUCKET_NAME
CLOUDFRONT_DOMAIN = CONFIG.CLOUDFRONT_DOMAIN

AWS_QUERYSTRING_EXPIRE = 604800

AWS_S3_SIGNATURE_NAME = "s3v4"
AWS_S3_REGION_NAME = "us-east-1"
AWS_S3_FILE_OVERWRITE = True
AWS_DEFAULT_ACL = None
AWS_S3_VERIFY = True
AWS_S3_CUSTOM_DOMAIN = CLOUDFRONT_DOMAIN
MEDIA_URL = CLOUDFRONT_DOMAIN + "/"


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = "assets/"

STATICFILES_DIRS = [
    BASE_DIR / "yum_app/static",
]

STATIC_ROOT = BASE_DIR / "staticfiles"

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
}

# CORS_ALLOWED_ORIGINS = ["https://"]

CORS_ALLOW_ALL_ORIGINS = True  # Allows requests from any domain
CORS_ALLOW_CREDENTIALS = True  # Allows sending cookies & authorization headers


SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(hours=24),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=365),
}
