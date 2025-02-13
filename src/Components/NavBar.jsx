import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from './AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>
                <h5>{user?.email || "Guest"}</h5>
            </div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img className='' src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? 
                    <Link onClick={logOut} className='btn btn-neutral rounded-none'>Log-Out</Link>
                     : <div className=''>
                        <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default NavBar;