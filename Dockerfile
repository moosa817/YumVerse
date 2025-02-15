FROM python:3.10-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*

COPY YumVerse/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn


COPY YumVerse /app/YumVerse

# Copy the entrypoint script into the container
COPY entrypoint.sh /app/entrypoint.sh

RUN chmod +x /app/entrypoint.sh

# Expose the port Django runs on
EXPOSE 8000

# Set the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]
