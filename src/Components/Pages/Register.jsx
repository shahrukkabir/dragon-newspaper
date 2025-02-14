import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, email, password, photo);

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-[24rem] border border-gray-600">
                <h2 className="text-2xl font-semibold text-center text-gray-200 mb-6">Register Your Account</h2>
                <hr className="mb-6 border-gray-500" />
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                        <input name="name" type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-500 bg-gray-700 text-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Photo URL</label>
                        <input name="photo" type="text" placeholder="Enter your photo URL" className="w-full px-3 py-2 border border-gray-500 bg-gray-700 text-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input name="email" type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-500 bg-gray-700 text-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input name="password" type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-500 bg-gray-700 text-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm text-gray-300">Accept <span className="text-red-500 font-semibold">Term & Conditions</span></label>
                    </div>
                    <button className="w-full py-2 mt-3 text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition text-lg">Register</button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-300">Already have an account?{" "}
                    <Link to="/auth/login" className="text-red-500 ml-1 font-semibold hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
