# MERN-BOOKSTORE

A full-stack MERN (MongoDB, Express, React, Node.js) bookstore application built using Vite for fast frontend development.

## Features

- **Frontend**: React (Vite)
- **Backend**: Express (Node.js)
- **Database**: MongoDB
- **Environment Variables**: `.env` file setup required
- **Port**: 5555 for backend and Vite development server

## Prerequisites

Before you begin, ensure you have installed the following:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Project Structure

```bash
MERN-BOOKSTORE/
│
├── frontend/          # React frontend
│   ├── src/           # Frontend source code
│   └── ...            # Other frontend-related files
│
├── backend/           # Express backend
│   ├── routes/        # API routes
│   ├── models/        # Mongoose models
│   └── ...            # Other backend-related files
│
├── .env               # Environment variables file (not in repository)
├── package.json       # Root package.json
├── README.md          # Project documentation
└── ...
```

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MERN-BOOKSTORE.git
cd MERN-BOOKSTORE
```

### 2. Create `.env` file

In the root directory, create a `.env` file with the following contents:

```bash
URI=your_mongodb_connection_string
PORT=5555
```

Make sure to replace `your_mongodb_connection_string` with the actual MongoDB URI.

### 3. Install dependencies

```bash
# Navigate to the frontend folder and install dependencies
cd frontend
npm install

# Navigate to the backend folder and install dependencies
cd ../backend
npm install
```

### 4. Run the application

To run both the frontend and backend servers using Vite, use the following command:

```bash
npm run dev
```

This will start the frontend React app and the backend Express server concurrently.

### 5. Access the application

- Frontend: Navigate to [http://localhost:5555](http://localhost:5555) in your browser.
- Backend: The backend API is accessible at [http://localhost:5555/books](http://localhost:5555/books).

## Scripts

- **Frontend:**

  - `npm run dev` - Run the React frontend using Vite.

- **Backend:**
  - `npm run dev` - Run the Express backend server.
- **Full-stack Development:**
  - `npm run dev` - Start both frontend and backend concurrently.

## License

This project is licensed under the MIT License.

```

```
