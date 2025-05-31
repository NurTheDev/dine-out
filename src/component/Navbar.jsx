import React from 'react';
import logo from "../assets/logo.svg"
const Navbar = () => {
    return (
        <div>
            {/*Navbar*/}
            <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
                <div className="flex items-center ">
                    <div className="text-primary mr-2">
                        <img src={logo || ""} alt="Logo" />
                    </div>
                    <h1 className="text-2xl font-bold"><span className="text-primary">Dine</span>Out</h1>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
