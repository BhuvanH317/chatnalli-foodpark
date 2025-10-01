# Chatnalli FoodPark - Complete E-commerce Platform

A full-stack e-commerce platform for selling traditional Indian snacks (Nippat, Maldhi, Churmuri) with customer website, admin panel, and backend API.

## Project Structure

```
chatnalli-foodpark/
├── backend/          # Node.js + Express + MongoDB API
├── frontend/         # Customer-facing React website
├── admin/            # Admin panel React application
└── README.md
```

## Features

### Customer Website (frontend/)
- **Product Catalog**: Browse authentic snacks by category
- **Product Details**: View ingredients, pricing, and add to cart
- **Shopping Cart**: Manage items, quantities, and checkout
- **User Authentication**: Register, login with email verification
- **Order Management**: Place orders, view order history
- **Responsive Design**: Mobile-first approach with cream/brown theme

### Admin Panel (admin/)
- **Dashboard**: Order stats, revenue tracking, recent orders
- **Product Management**: Full CRUD operations for products
- **Order Management**: View all orders, update shipping status
- **Secure Access**: JWT authentication for admin users

### Backend API (backend/)
- **Authentication**: JWT-based auth with email verification
- **Product APIs**: Complete product management
- **Order Processing**: COD orders with status tracking
- **Email Service**: Nodemailer integration for verification
- **Database**: MongoDB with Mongoose ODM

## Setup Instructions

### 1. Backend Setup
```bash
cd backend
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI, email credentials, etc.

# Start development server
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install

# Start development server (runs on port 5173)
npm run dev
```

### 3. Admin Panel Setup
```bash
cd admin
npm install

# Start development server (runs on port 5174)
npm run dev
```

## Environment Variables

Create `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatnalli-foodpark
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

## Database Models

### User
- name, email, password (bcrypted)
- isVerified, role (user/admin)
- timestamps

### Product
- name, description, ingredients
- price, weight, image, category
- inStock status

### Order
- userId, items array, shipping info
- totalPrice, status, payment method
- timestamps

### Token
- userId, token, expiry (for email verification)

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `GET /api/auth/verify/:token` - Email verification
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `POST /api/orders` - Place order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders` - Get all orders (admin only)
- `PUT /api/orders/:id` - Update order status (admin only)

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Dashboard statistics

## Technologies Used

### Frontend & Admin
- React 18 with Vite
- React Router DOM for navigation
- Tailwind CSS for styling
- Axios for API calls
- Context API for state management
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for email verification
- Cloudinary for image storage
- CORS for cross-origin requests

## Design Theme

- **Colors**: Cream (#FDF6E3) and Brown (#8B4513) palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Responsive design with 8px spacing system
- **Components**: Rounded corners, subtle shadows, smooth animations
- **Icons**: Lucide React icon set throughout

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Email verification required for login
- Role-based access control (admin/user)
- CORS protection
- Input validation and sanitization

## Payment Integration

- Cash on Delivery (COD) payment method
- Order confirmation via email
- Order status tracking (Pending → Shipped → Delivered)

## Email Features

- Welcome email with verification link
- Order confirmation emails
- Gmail SMTP integration with app passwords
- HTML email templates with brand styling

## Deployment Ready

The application is structured for easy deployment:

- **Frontend**: Vercel/Netlify ready
- **Admin Panel**: Vercel/Netlify ready
- **Backend**: Railway/Render/AWS ready
- Environment variables properly configured
- Production build scripts included

## Admin Account Setup

To create an admin account:

1. Register a normal user account through the frontend
2. Manually update the user's role to 'admin' in MongoDB:
   ```javascript
   db.users.updateOne(
     { email: "admin@example.com" }, 
     { $set: { role: "admin", isVerified: true } }
   )
   ```
3. Login to admin panel with admin credentials

## Development Notes

- Backend runs on port 5000
- Frontend runs on port 5173  
- Admin panel runs on port 5174
- MongoDB connection required
- Email service configuration needed for verification
- Cloudinary account needed for image uploads
- All routes protected with appropriate authentication
- Responsive design optimized for mobile and desktop

## Production Checklist

- [ ] Configure production MongoDB URI
- [ ] Set up production email service
- [ ] Configure Cloudinary for image storage
- [ ] Update CORS origins for production URLs
- [ ] Set secure JWT secret
- [ ] Enable HTTPS in production
- [ ] Set up domain and SSL certificates
- [ ] Configure environment variables on hosting platform
- [ ] Test all functionalities in production environment

This is a production-ready e-commerce platform with all essential features for selling traditional Indian snacks online.