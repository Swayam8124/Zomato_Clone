import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    };

    updateCart(); // Fetch cart initially

    window.addEventListener("storage", updateCart);
    return () => {
      window.removeEventListener("storage", updateCart);
    };
  }, []);
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 fixed top-24 left-6">Your Cart 🛒</h1>
      <div className="pt-16">
      </div>
      <br />
      <br />
      <br />
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-3" />
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-red-500 text-lg font-bold">₹{item.price}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <Link to="/checkout">
              <button className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition">
                Proceed to Checkout 💳
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
