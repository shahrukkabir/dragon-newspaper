import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='font-poppins '>
            <header className='py-3 w-11/12 mx-auto'>
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;