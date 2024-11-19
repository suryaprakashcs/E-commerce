# E-commerce

This is a simple e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js).


Technologies Used:

MongoDB: NoSQL database
Express: Node.js framework for building APIs
React: JavaScript library for building user interfaces
Node.js: JavaScript runtime for server-side programming


Installation:


Clone the repository
git clone https://github.com/suryaprakashcs/E-commerce.git

cd e-commerce
Install server dependencies

cd backend
npm install
Install client dependencies

cd ../frontend
npm install
Create a .env file in the backend folder and add the following environment variables

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Start the backend server:



cd backend
npm run dev
Start the frontend server

cd ../frontend
npm start


Folder Structure:


simple-ecommerce-website/
│
├── backend/                # Express and MongoDB server
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middleware/         # Middleware
│   ├── config/             # Configuration files
│   ├── server.js           # Entry point for the server
│   └── package.json        # Server dependencies
│
├── frontend/               # React client
│   ├── public/             # Public files
│   ├── src/                # React source files
│   │   ├── components/     # React components
│   │   ├── pages/          # React pages
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point for React
│   └── package.json        # Client dependencies
│
└── README.md               # This file


