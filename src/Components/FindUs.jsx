import React from 'react';
import { FaFacebook, FaInstagram,FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h4 className='font-semibold mb-4'>Find Us On</h4>
            <div className="join flex gap-3 join-vertical">
                <button className="btn justify-start join-item"><FaFacebook/>Facebook</button>
                <button className="btn justify-start join-item"><FaTwitter/>Twitter</button>
                <button className="btn justify-start join-item"> <FaInstagram/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;