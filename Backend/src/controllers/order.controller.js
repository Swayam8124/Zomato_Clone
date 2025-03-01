import { Order } from '../models/order.model.js';
import { Cart } from '../models/cart.model.js';
import { clearCart } from './cart.controller.js';

// Place an order
export const placeOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate('items.foodId');
        if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

        const totalPrice = cart.items.reduce((acc, item) => acc + (item.foodId.price * item.quantity), 0);

        const order = new Order({
            userId: req.user._id,
            items: cart.items,
            restaurantId: cart.items[0].foodId.restaurantId,
            totalPrice,
        });

        await order.save();
        await clearCart(req.user._id);

        res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user's orders
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user._id }).populate('items.foodId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.orderId, { status }, { new: true });

        if (!order) return res.status(404).json({ message: "Order not found" });

        res.status(200).json({ message: "Order status updated", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
