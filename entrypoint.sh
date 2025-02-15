#!/bin/sh
#ENTRY POINT FOR DOCKER
# Exit script on any error
set -e  

# Load environment variables from .env file
if [ -f /app/YumVerse/.env ]; then
  export $(grep -v '^#' /app/YumVerse/.env | xargs)
fi

# Apply database migrations
echo "Applying database migrations..."
python YumVerse/manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python YumVerse/manage.py collectstatic --noinput

# Start the Gunicorn server
echo "Starting Gunicorn..."
exec gunicorn --chdir YumVerse --bind 0.0.0.0:8000 yum_project.wsgi:application
