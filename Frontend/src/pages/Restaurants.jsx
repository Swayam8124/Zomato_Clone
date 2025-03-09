import React from "react";
import { motion } from "framer-motion";

const restaurants = [
  { id: 1, name: "Spicy Grill", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "Chicken House", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60" },
  { id: 3, name: "Pasta Palace", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60" },
  { id: 4, name: "Burger Barn", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60" },
];

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Top Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {restaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300"
          >
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
