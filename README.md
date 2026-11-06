# 🍴 The Food Recipe

A React-based Food Recipe application where users can explore recipes, search for their favourite dishes, save recipes, and share their own cooking ideas.

## 📌 About the Project

The Food Recipe application is developed using React and Vite. It provides separate Admin and User modules with signup and login functionality. Users can browse different recipes, view ingredients and preparation steps, manage their favourite recipes, and share their own recipes.

## ✨ Features

### 👤 User Module
- User Registration and Login
- Browse original food recipes
- Search recipes by name
- Filter recipes by category
- View recipe ingredients and preparation methods
- Add and remove favourite recipes
- Share personal recipes
- View shared recipes
- Delete recipes shared by the logged-in user
- Logout functionality

### 🔐 Admin Module
- Separate Admin Registration and Login
- Admin Dashboard

### 💾 Data Management
- Local Storage for user registration and login
- Local Storage for favourite recipes
- Local Storage for user-shared recipes

## 🛠️ Technologies Used

- **Frontend:** React.js
- **Build Tool:** Vite
- **Programming Language:** JavaScript
- **Styling:** CSS
- **Routing:** React Router DOM
- **Data Storage:** Browser Local Storage
- **Version Control:** Git and GitHub
- **Deployment:** Vercel

## 📂 Project Structure

```text
food-recipe-react/
│
├── public/
│   └── images/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── UserDashboard.jsx
│   │   └── ShareRecipe.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── index.html
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd food-recipe-react
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:5173/
```

## 🏗️ Build for Production

To create a production build, run:

```bash
npm run build
```

The production-ready files will be generated inside the `dist` folder.

## 🚀 Deployment

The application can be deployed using **Vercel** by connecting the GitHub repository.

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## ⚠️ Note

This project uses browser Local Storage for data management. User accounts, favourites, and shared recipes are stored locally in the browser. Data is not synchronized between different devices or browsers.

## 👩‍💻 Developed By

**Laswanthi**

B.Tech – Computer Science and Engineering

## 🎯 Project Objective

To develop a user-friendly recipe application using React that demonstrates component-based development, state management, routing, form handling, and browser-based data storage.
