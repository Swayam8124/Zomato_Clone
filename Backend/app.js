import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './src/routes/user.routes.js';
import providerRoutes from './src/routes/provider.routes.js';
import restaurantRoutes from './src/routes/restaurant.routes.js';
import foodRoutes from './src/routes/food.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import orderRoutes from './src/routes/order.routes.js';
import paymentRoutes from './src/routes/payment.routes.js';
import reviewRoutes from './src/routes/review.routes.js';
import deliveryRoutes from './src/routes/delivery.routes.js';
import adminRoutes from './src/routes/admin.routes.js';

const app = express();

// Global Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/provider', providerRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/admin', adminRoutes);

export { app };
