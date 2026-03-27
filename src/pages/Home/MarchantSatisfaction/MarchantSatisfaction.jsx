import React from "react";
import img from "/images/location-merchant.png";

const MarchantSatisfaction = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row p-10 text-center`}
      style={{
        background:
          "linear-gradient(#ffffff10, #CAEB66), url('/images/be-a-merchant-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex-1">
        <div>
          <h1 className={`lg:text-3xl text-gray-700 font-bold `}>
            Marchant and Customer Satistaction <br></br> is Our First Priority
          </h1>
          <p className="text-sm lg:text-md mt-8">
            We offer the lowset delivery charge with the highest value along
            with 100% safety of your product Pathao courier delivery your
            parceis in every corrner of Bangladesh right on time.
          </p>
          <div className="lg:mt-15 text-center m-5 flex flex-col lg:flex-row p-3">
            <button className="btn w-40 rounded-full ml-15 lg:ml-6 mb-2 lg:mb-0 p-4">
              Become a Merchant
            </button>

            <button className="btn w-40 rounded-full ml-15 lg:ml-6 p-4">
              Eearn with ZapShift Coureir
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="w-60 lg:w-90 hover:animate-ping" src={img} alt="" />
      </div>
    </div>
  );
};

export default MarchantSatisfaction;
