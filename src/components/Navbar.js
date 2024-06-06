import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-300 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Kalvium</div>
      <div className="space-x-4">
        <a href="#" className="text-white">About Us</a>
        <a href="#" className="text-white">Contacts</a>
        <a href="#" className="text-white">Courses</a>
      </div>
      <button className="text-white border border-white py-1 px-3">Login</button>
    </nav>
  );
};

export default Navbar;
