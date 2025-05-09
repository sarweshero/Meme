# Meme Generator Project

This is a full-stack web application for generating and sharing memes. The project is built using Django for the backend and React with Vite for the frontend.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Backend API Endpoints](#backend-api-endpoints)
- [Frontend Development](#frontend-development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)
- [Contact](#contact)

---

## Features

- User-friendly interface for creating memes
- Template library with popular meme formats
- Text customization options (font, size, color)
- Upload custom images for meme creation
- Save memes to personal collection
- Share memes directly to social media platforms
- User authentication and profile management
- Backend API for managing meme data
- Database integration using SQLite
- Responsive design for mobile and desktop
- Scalable architecture for future enhancements

---

## Project Structure

### Key Directories

- **backend/**: Contains Django backend configuration and settings
  - **config/**: Project settings and URL configuration
  - **api/**: API views, serializers, and endpoints
- **frontend/**: Contains React frontend code and assets
  - **src/**: Main source code
    - **components/**: React components
    - **pages/**: Page layouts
    - **hooks/**: Custom React hooks
    - **assets/**: Static files like images
    - **styles/**: CSS and style-related files
- **meme/**: Contains the core Django app for meme management
  - **models/**: Database models
  - **views/**: View functions and classes
  - **templates/**: HTML templates
- **media/**: Stored user uploads and generated memes
- **static/**: Static files for the application
- **tests/**: Test suites for both frontend and backend

---

## Technologies Used

### Backend
- Python 3.12
- Django 4.x
- Django REST Framework
- SQLite (default database)
- Pillow for image processing
- pytest for testing

### Frontend
- React 18.x
- Vite
- CSS Modules
- Axios for API requests
- Jest for testing
- React Router for navigation

### Development Tools
- Git for version control
- Docker for containerization
- ESLint/Prettier for code formatting
- Black/isort for Python code formatting

---

## Setup Instructions

### Prerequisites
- Python 3.12 or higher
- Node.js 16.x or higher
- npm or yarn package manager
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```

3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply database migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

6. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
   The backend will be available at http://localhost:8000/

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or using yarn
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or using yarn
   yarn dev
   ```
   The frontend will be available at http://localhost:5173/

### Docker Setup (Alternative)
1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
   This will set up both frontend and backend services.

---

## Backend API Endpoints

### Authentication
- `POST /api/auth/register/`: Register a new user
- `POST /api/auth/login/`: Obtain authentication token
- `POST /api/auth/logout/`: Invalidate authentication token
- `GET /api/auth/user/`: Get current user details

### Memes
- `GET /api/memes/`: List all memes
- `POST /api/memes/`: Create a new meme
- `GET /api/memes/{id}/`: Retrieve a specific meme
- `PUT /api/memes/{id}/`: Update a specific meme
- `DELETE /api/memes/{id}/`: Delete a specific meme

### Templates
- `GET /api/templates/`: List all meme templates
- `POST /api/templates/`: Upload a new template (admin only)
- `GET /api/templates/{id}/`: Retrieve a specific template

### User Profile
- `GET /api/profile/`: Get user profile information
- `PUT /api/profile/`: Update user profile information
- `GET /api/profile/memes/`: Get memes created by current user

---

## Frontend Development

### Project Structure
The frontend is organized into the following structure:
- `components/`: Reusable UI components
- `pages/`: Full page components
- `hooks/`: Custom React hooks
- `services/`: API service functions
- `contexts/`: React contexts for state management

### Main Features
1. **Home Page**: Browse trending memes and templates
2. **Meme Creator**: Interactive meme creation tool
3. **User Dashboard**: Manage created memes
4. **Template Gallery**: Browse and select templates

### State Management
The application uses React Context API for global state management, with custom hooks to interact with the API.

### Styling
The project uses CSS Modules for component styling, with a design system defined in the `styles/` directory.

---

## Testing

### Backend Testing
1. Run the test suite:
   ```bash
   python manage.py test
   # or
   pytest
   ```

2. Check test coverage:
   ```bash
   coverage run manage.py test
   coverage report
   ```

### Frontend Testing
1. Run unit tests:
   ```bash
   npm run test
   # or
   yarn test
   ```

2. Run E2E tests:
   ```bash
   npm run test:e2e
   # or
   yarn test:e2e
   ```

---

## Deployment

### Backend Deployment
1. Set up environment variables for production
2. Configure a production database (PostgreSQL recommended)
3. Set `DEBUG=False` in settings
4. Collect static files:
   ```bash
   python manage.py collectstatic
   ```
5. Use Gunicorn as the WSGI server
6. Set up Nginx as a reverse proxy

### Frontend Deployment
1. Build the production bundle:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Serve the static files from a CDN or web server

### Docker Deployment
1. Use the provided Dockerfile and docker-compose.yml
2. Configure environment variables for production
3. Build and deploy:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

---

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes
4. Run tests to ensure everything works
5. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
6. Push to your fork:
   ```bash
   git push origin feature-name
   ```
7. Create a Pull Request

### Code Style
- Follow PEP 8 for Python code
- Use ESLint and Prettier for JavaScript/React code
- Write tests for new features

---

## Screenshots

![Home Page](path/to/screenshot1.png)
*Caption: Home page featuring trending memes*

![Meme Creator](path/to/screenshot2.png)
*Caption: The meme creation interface*

![User Dashboard](path/to/screenshot3.png)
*Caption: User dashboard showing created memes*

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **Project Maintainer**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Username](https://github.com/yourusername)
- **Issue Tracker**: [GitHub Issues](https://github.com/yourusername/meme-generator/issues)

For support or to report bugs, please open an issue on the GitHub repository.

