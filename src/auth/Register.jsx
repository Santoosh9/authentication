import React from 'react'
import { Link } from 'react-router-dom';
import regimg from '../assets/register.png'
const Register = () => {
  return (
  <>
  
  
  <div className="min-h-screen flex bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center"  style={{ backgroundImage: `url(${regimg})` }}></div>
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-blue-600">Register</h2>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Register</button>
            </div>
            <div className="text-center">
              <Link to="/login" className="text-sm text-blue-500 hover:underline">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Register



