## Introduction

This is the backend for the project. It's a Node.js application built with Express, MongoDB using Mongoose, and includes authentication using JSON Web Tokens (JWT).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure the following:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your-secret-key
   ```

   Replace `your-database-name` and `your-secret-key` with your desired values.

## Run Locally

To start the server locally, run:

```bash
npm start
```

The server will be running at `http://localhost:5000`.

## Scripts

- `npm start`: Start the server using `node index.js`.
- `npm test`: Run tests (you can customize this based on your testing setup).

## Dependencies

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Password hashing.
- [cors](https://www.npmjs.com/package/cors): Enable Cross-Origin Resource Sharing.
- [dotenv](https://www.npmjs.com/package/dotenv): Environment variable management.
- [express](https://www.npmjs.com/package/express): Web application framework.
- [express-validator](https://www.npmjs.com/package/express-validator): Middleware for validation.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): JWT authentication.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling.
- [nodemon](https://www.npmjs.com/package/nodemon): Auto-restart server during development.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
```
#Frontend
just download the live server extension and run the index.html file 
