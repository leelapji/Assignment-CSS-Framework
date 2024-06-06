import React from 'react';

const MainContent = () => {
  return (
    <div className="text-center mt-10">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Button One</button>
      <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700">
        <strong>Alert!</strong> This is awesome!
      </div>
      <div className="mt-10 p-4 shadow-md">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" className="mx-auto"/>
        <p>Kalvium Store</p>
        <p>You have a new course!</p>
      </div>
    </div>
  );
};

export default MainContent;
