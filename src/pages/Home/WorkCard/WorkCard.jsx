import React from 'react';
import img from "/images/delivery-van.png"
const WorkCard = ({ work }) => {
  if (!work) return null;

  return (
    <div className=" card bg-base-100 rounded-xl shadow-2xl p-5  hover:animate-pulse cursor-pointer">
      <img className='w-10 ml-3' src={img} alt="" />
      <h2 className='text-2xl font-bold m-3 text-gray-700'> {work.title}</h2>
      <p className='text-gray-500'>{work.description}</p>
    </div>
  );
};

export default WorkCard;