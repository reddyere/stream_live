import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
    <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">Register</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Username</label>
          <input 
            type="text"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="username"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input 
            type="email"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Password</label>
          <input 
            type="password"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition"
        >
          Create Account
        </button>
      </form>
      <p className="text-gray-400 mt-4 text-center">
        Already have an account?{' '}
        <Link to="/login" className="text-red-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>
);

export default RegisterPage;
