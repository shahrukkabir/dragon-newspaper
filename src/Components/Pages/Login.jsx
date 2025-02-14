import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-xl w-[28rem] border border-gray-600">
                <h2 className="text-2xl font-semibold text-center text-gray-200 mb-6">Login to Your Account</h2>
                <hr className="mb-6 border-gray-500" />
                <form>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-500 bg-gray-700 text-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 border border-gray-500 bg-gray-700 text-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <button className="w-full py-3 mt-3 text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition text-lg">Login</button>
                </form>
                <p className="mt-6 text-sm text-center text-gray-300">Don't Have An Account?{" "}
                    <Link to="/auth/register" className="text-red-500 ml-1 font-semibold hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
