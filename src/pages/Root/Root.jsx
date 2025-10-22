import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className="max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm flex flex-col min-h-screen">
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <ToastContainer
                position="top-right"
                toastStyle={{
                    backgroundColor: '#ffffff',
                    color: '#000000',  
                    borderRadius: '8px',  
                    fontSize: '16px',          
                }}
            />
        </div>
    );
};

export default Root;
