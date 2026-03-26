import React from "react";
import WorkCard from "../WorkCard/WorkCard";

const Works = ({ works }) => {
  console.log(Array.isArray(works)); // must be true
  return (
    <div className="mt-25 p-10">
      <h2 className="text-3xl font-bold text-center m-10 underline text-gray-700">How it Works</h2>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {works?.slice(0, 4).map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
