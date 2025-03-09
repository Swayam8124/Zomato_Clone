import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      toast.success('Successfully logged in!');
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      toast.success('Successfully signed up!');
      localStorage.setItem('isLoggedIn', 'true');
    }
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-500 px-4 sm:px-6 lg:px-8">
        <h1 className=" text-6xl text-white absolute top-4">Zomato</h1>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          {isLogin ? "LOGIN" : "Join Us Today!"}
        </h2>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Role
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="delivery">Delivery Partner</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </div>
        )}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password (min 8 characters)"
          minLength={8}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
        <form onSubmit={handleSubmit}>
          <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <span
            className="text-red-500 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign up" : " Log in"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
