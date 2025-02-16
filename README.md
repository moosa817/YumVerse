# YumVerse

FROTNEND URL: https://yumversefrontend.vercel.app

YumVerse is a Django-based API designed to power a food-related platform, providing users with features like recipe management, restaurant listings, and user-generated reviews.

## Features

- User authentication (Register/Login/Google OAuth)
- Recipe management (Create, Read, Update, Delete recipes)
- Restaurant listings and reviews
- Search and filter functionality
- JWT-based authentication
- Django REST Framework (DRF) powered API
- Swagger documentation

## Tech Stack

- **Backend:** Django, Django REST Framework (DRF)
- **Database:** PostgreSQL / SQLite (for development)
- **Authentication:** JWT, Google OAuth (optional)
- **API Documentation:** drf-spectacular (Swagger UI)
- **Frontend:** (Optional - React/Vue/Any other framework can be used separately)

## Installation

### Prerequisites

Ensure you have the following installed:
- Python 3.8+
- PostgreSQL (if using a production database)
- Virtual environment (optional but recommended)

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/moosa817/yumverse.git
   cd yumverse
   ```

2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```sh
   python manage.py migrate
   ```

5. Create a superuser:
   ```sh
   python manage.py createsuperuser
   ```
   Follow the prompts to set up an admin account.

6. Run the development server:
   ```sh
   python manage.py runserver
   ```
   The API will be available at `http://127.0.0.1:8000/`

## API Documentation

To view API documentation, access:
```
http://127.0.0.1:8000/docs/
```

## Deployment

### Using Docker
1. Build and run the container:
   ```sh
   docker-compose up --build
   ```
2. The API will be accessible at `http://localhost:8000/`

### Environment Variables
Create a `.env` file with the following variables:
```
FROM_EMAIL=your_email@example.com
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key_here
DEBUG=True  # Set False in production
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_STORAGE_BUCKET_NAME=your_bucket_name
CLOUDFRONT_DOMAIN=your_cloudfront_domain
SENDGRID_API_KEY=your_sendgrid_api_key
```

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Added a new feature'`)
4. Push to your fork (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact
For any inquiries or support, reach out to `your_email@example.com`.

