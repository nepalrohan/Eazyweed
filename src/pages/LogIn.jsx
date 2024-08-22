// src/LoginPage.js
import React, { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center  bg-gradient-to-br from-purple-700 to-purple-500">
      <div className="bg-white p-8 rounded-lg mt-12 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple focus:ring focus:ring-purple focus:ring-opacity-50"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple focus:ring focus:ring-purple focus:ring-opacity-50"
          />
        </div>
        <button
          className="w-full bg-purple-600 text-purple py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-50"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LogIn;
