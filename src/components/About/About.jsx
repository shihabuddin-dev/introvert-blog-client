import React from 'react';
import Navbar from '../components/Navbar';
import { FaUserAlt } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20 px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">About Us</h1>
                <FaUserAlt className="text-green-500 text-3xl" />
            </div>
        </>
    );
};

export default About;
