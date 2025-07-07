# 🏨 Travel & Stay Platform

A full-stack web application inspired by Airbnb, where users can explore, list, and review unique places to stay. Built with Node.js, Express, MongoDB, and EJS — this project includes secure authentication, image uploads, map integration, and a responsive UI.

## 🌐 Live Demo

🔗 [Live Website](https://travel-project-1c08.onrender.com)

## 📸 Features

- **User Authentication**: Register, log in, log out using Passport.js and sessions.
- **Listings Management**: Create, update, and delete listings with image uploads (Cloudinary).
- **Reviews System**: Users can add and manage reviews with a 5-star rating system.
- **Interactive Map**: Listings are geocoded with Mapbox and displayed with markers.
- **Filtering & Search**: Filter listings by category (beach, mountain, palace, etc.) and search by title or location.
- **Tax Toggle**: Option to view prices with or without 18% GST.
- **Responsive UI**: Mobile-first design using Bootstrap 5 and custom CSS.
- **Secure & Validated**: Joi validation, secure cookies, and authorization checks.

## 🛠️ Tech Stack

**Frontend**  
- EJS  
- Bootstrap 5  
- Custom CSS  
- Mapbox GL JS  

**Backend**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- Cloudinary (for image storage)  
- Multer & multer-storage-cloudinary  
- Passport.js (authentication)  
- Joi (form validation)  

**Deployment**  
- Hosted on [Render](https://render.com)  
- MongoDB Atlas for cloud database  

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
git clone https://github.com/yourusername/your-repo-name.git<br>
cd your-repo-name<br>
npm install<br>
node app.js<br>
