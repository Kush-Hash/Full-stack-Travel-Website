# 🏨 Wanderlust - Travel & Stay Platform

A full-stack web application inspired by Airbnb, where users can explore, list, and review unique places to stay. Built using **Node.js, Express, MongoDB, and EJS**, this project includes secure authentication, image uploads, map integration, search/filter features, and a responsive UI.

---

## 🌐 Live Demo

🔗 [Live Website](https://travel-project-1c08.onrender.com/)

---

## 📸 Features

- 🔐 **User Authentication** – Register, login, logout with session-based auth using Passport.js
- 🏘️ **Listings Management** – Add, edit, or delete property listings with image uploads via Cloudinary
- 🌍 **Interactive Map** – Mapbox integration shows geocoded listings with markers
- ⭐ **Reviews System** – Leave 5-star ratings and comments on listings
- 🔍 **Filtering & Search** – Filter by category (e.g., beach, palace) and search by title/location
- 💰 **Tax Toggle** – Show/hide 18% GST on prices using a custom toggle
- 📱 **Responsive UI** – Clean mobile-first design using Bootstrap 5 and custom CSS
- 🛡️ **Security & Validation** – Protected routes, cookie security, Joi-based server-side validation

## 🛠️ Tech Stack

### 🔧 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Passport.js (authentication)
- Cloudinary (image hosting)
- Joi (schema validation)
- Multer (file handling)

### 🎨 Frontend
- EJS templating
- Bootstrap 5
- Custom CSS
- Mapbox GL JS

### ☁️ Deployment
- Hosted on Render
- MongoDB Atlas for cloud DB

---

## 📂 Project Structure
├── app.js # Main application file <br>
├── models/ # Mongoose schemas (User, Listing, Review) <br>
├── controllers/ # Route logic<br>
├── routes/ # Express routes<br>
├── views/ # EJS templates<br>
├── public/ # Static assets (CSS, client-side JS)<br>
├── utils/ # Utility functions & error handler<br>
├── middleware.js # Custom middleware<br>
├── cloudConfig.js # Cloudinary config<br>
├── SchemaValidation/ # Joi validation schemas<br>
├── init/ # Database seeding scripts<br>
├── .env.example # Example environment variables<br>


## ⚙️ Environment Variables

Create a `.env` file in the root and add the following:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

---

## 🚀 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Kush-Hash/Full-stack-Travel-Website.git

# 2. Navigate into the project directory
cd Full-stack-Travel-Website

# 3. Install dependencies
npm install

# 4. Configure your environment variables
# (see .env section above)

# 5. Run the application
node app.js

