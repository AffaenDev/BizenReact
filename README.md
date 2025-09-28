# YTCraigslist

A modern video-based marketplace platform inspired by YouTube and Craigslist, allowing users to browse, search, and post video listings of items for sale.

## Project Structure

The project is divided into two main parts:

### Frontend (React Native)

- Modern UI with dark/light theme support
- Internationalization (i18n) with English, Spanish, and Italian
- Video wall with lazy loading
- Category and region filtering
- Search functionality
- User authentication with social login options

### Backend (Express.js)

- RESTful API endpoints for videos, users, categories, and regions
- Mock data for development and testing
- Authentication system with JWT support

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Features

- **Video Wall**: Browse videos in a responsive grid layout
- **Filtering**: Filter videos by region and category
- **Search**: Search videos by title, description, or location
- **Authentication**: Login/register with email or social accounts
- **Internationalization**: Support for multiple languages
- **Theming**: Light and dark mode support

## Technologies Used

- **Frontend**: React Native, React Navigation, i18next, Tailwind CSS
- **Backend**: Express.js, JWT for authentication
- **Future Improvements**: MongoDB for database, AWS S3 for video storage