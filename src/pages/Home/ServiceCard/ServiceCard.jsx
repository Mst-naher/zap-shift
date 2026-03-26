import React from 'react';
import img from "/images/service.png"

const ServiceCard = ({ service }) => {
  console.log(service)
  return (
    <div className="bg-purple-100  hover:bg-amber-300  hover:text-xl text-md shadow-2xl rounded-2xl p-2 text-center">
      <img
        className="  bg-amber-200 w-15 rounded-full mx-auto m-5 shadow-2xl"
        src={img}
        alt=""
      />
      <h1 className="font-bold text-gray-800 hover:text-white mb-5">
        {service.title}
      </h1>
      <p className="mb-5 text-gray-900 hover:text-white">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;