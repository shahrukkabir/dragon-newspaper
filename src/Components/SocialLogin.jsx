import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h4 className='font-semibold mb-4'>Login With</h4>
            <div className='*:w-full'>
                <button className="btn mb-2"><FaGoogle />Login with Google</button>
                <button className="btn"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;