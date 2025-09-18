# Blog API

A RESTful Blog API built with Node.js, Express.js, and MongoDB. This API provides full CRUD operations for blog posts with JWT-based authentication.

## Features

- 🔐 JWT-based user authentication (signup/login)
- 📝 Full CRUD operations for blog posts
- 🛡️ Protected routes (only authenticated users can create/update/delete posts)
- 👀 Public access to view all posts
- ✅ Input validation and error handling
- 🔒 Password hashing with bcryptjs
- 📄 Pagination support for posts
- 🏗️ Clean, modular, and production-ready code

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

## Project Structure

```
blog-api/
├── server.js              # Entry point
├── package.json           # Dependencies and scripts
├── config/
│   └── db.js             # MongoDB connection
├── models/
│   ├── User.js           # User schema
│   └── Post.js           # Post schema
├── routes/
│   ├── auth.js           # Authentication routes
│   └── posts.js          # Post routes
├── controllers/
│   ├── authController.js # Auth logic
│   └── postController.js # Post logic
├── middleware/
│   ├── auth.js           # JWT authentication
│   └── errorHandler.js   # Error handling
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bharat1Rajput/BlogAPI.git
   cd blog-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/blog-api
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/auth/signup` | Register a new user | Public |
| POST | `/api/auth/login` | Login user | Public |

### Posts

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/posts` | Get all posts (with pagination) | Public |
| GET | `/api/posts/:id` | Get single post by ID | Public |
| POST | `/api/posts` | Create a new post | Private |
| PUT | `/api/posts/:id` | Update a post | Private |
| DELETE | `/api/posts/:id` | Delete a post | Private |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Check API status |

## API Usage Examples

### 1. Register a new user

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "Password123"
  }'
```

### 2. Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "Password123"
  }'
```

### 3. Create a new post (requires authentication)

```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post!"
  }'
```

### 4. Get all posts

```bash
curl -X GET http://localhost:5000/api/posts
```

### 5. Get posts with pagination

```bash
curl -X GET "http://localhost:5000/api/posts?page=1&limit=5"
```

## Request/Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    // Validation errors (if any)
  ]
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Validation Rules

### User Registration/Login
- **Username**: 3-30 characters, alphanumeric and underscores only
- **Email**: Valid email format
- **Password**: Minimum 6 characters, must contain at least one lowercase letter, one uppercase letter, and one number

### Blog Posts
- **Title**: 1-200 characters
- **Content**: 1-5000 characters

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- JWT token errors
- 404 Not Found errors
- 500 Internal Server errors

## Development

### Scripts
- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with nodemon

### Environment Variables
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

## Production Considerations

1. **Change JWT_SECRET** to a strong, random string
2. **Use environment variables** for all sensitive data
3. **Enable HTTPS** in production
4. **Set up proper logging** and monitoring
5. **Use a production MongoDB** instance
6. **Implement rate limiting** for API endpoints
7. **Add input sanitization** for additional security

## License

ISC
