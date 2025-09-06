

# 🍲 Recipe App API

A simple backend API for managing recipes, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## ✨ Features

- 🥗 RESTful API for recipe management
- 🍃 MongoDB integration using Mongoose
- 🔐 Environment variable support via dotenv
- 🚀 Nodemon for development

---

## 🚀 Getting Started

### 📦 Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/)

### ⚡ Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/iamneek/recipe_api_MEN
   cd recipe_api_MEN
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```env
     MONGO_URI=mongodb://localhost:27017/recipe_db
     ```

### 🏃 Running the Server
- **Development mode (with nodemon):**
  ```sh
  npm run dev
  ```
- **Production mode:**
  ```sh
  node index.js
  ```

---

## 📡 API Endpoints

### 🥘 Recipes
- `GET /recipe/` - Get all recipes
- `GET /recipe/id` - Get a recipe
- `POST /recipe/add/` - Add a recipe
- `PUT /recipe/update/id` - Update a recipe
- `DELETE /recipe/delete/id` - Delete a recipe


#### Postman Testing
<img width="854" height="724" alt="image" src="https://github.com/user-attachments/assets/76cf2ddb-0565-4ed7-8809-4b32ffed6362" />
<p align="center"><i>Testing add recipe api</i></p>

---
<img width="910" height="745" alt="image" src="https://github.com/user-attachments/assets/ae74c421-b1c1-4b14-ad38-1c57dde980d8" />
<p align="center"><i>Testing get all recipe api</i></p>

---
<img width="898" height="785" alt="image" src="https://github.com/user-attachments/assets/60ccdf4f-ed8e-4c5d-a1b6-9b072a24d349" />
<p align="center"><i>Testing update recipe api</i></p>

---
<img width="911" height="761" alt="image" src="https://github.com/user-attachments/assets/00450257-0b48-400b-8366-8e8f007a5f7a" />
<p align="center"><i>Testing get a single recipe api</i></p>

---
<img width="916" height="759" alt="image" src="https://github.com/user-attachments/assets/bb53e0eb-7120-4566-b410-af4bb7b9413d" />
<p align="center"><i>Testing delete a recipe api</i></p>

---

## 🗂️ Project Structure
```
recipe_app_api/
├── controller/
│   └── recipe.controller.js
├── model/
│   └── recipe.model.js
├── route/
│   └── recipe.route.js
├── index.js
├── package.json
└── .env
```

---

## ⚙️ Environment Variables
- `MONGO_URI`: MongoDB connection string

---

## 📜 Scripts
- `npm run dev`: Start server with nodemon
- `npm start`: Start server with Node.js

---

## 👤 Author
- [Neek](https://github.com/iamneek)
