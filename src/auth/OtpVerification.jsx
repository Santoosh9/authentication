import React from 'react'

const OtpVerification = () => {
  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600">OTP Verification</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">OTP</label>
            <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Verify OTP</button>
          </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default OtpVerification



