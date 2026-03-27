import React from 'react';
import img from "/images/delivery-van.png"
const WorkCard = ({ work }) => {
  if (!work) return null;

  return (
    <div
      className="card rounded-xl shadow-2xl p-5  hover:animate-bounce cursor-pointer"
      style={{
        background:
          "linear-gradient(#ffffff90, #CAEB66), url('/images/be-a-merchant-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <img className="w-15 ml-3 rounded-full bg-amber-400 p-1" src={img} alt="" />
      <h2 className="text-2xl font-bold m-3 text-gray-700"> {work.title}</h2>
      <p className="text-gray-500">{work.description}</p>
    </div>
  );
};

export default WorkCard;