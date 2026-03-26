import React from 'react';
import img from "/images/location-merchant.png"

const MarchantSatisfaction = () => {
  return (
    <div className="flex p-10 bg-amber-50">
      <div className="">
        <div>
          <h1 className='text-3xl text-gray-700 font-bold'>Marchant and Customer Satistaction is Our First Priority</h1>
          <p>
            We offer the lowset delivery charge with the highest value along
            with 100% safety of your product Pathao courier delivery your
            parceis in every corrner of Bangladesh right on time.
          </p>
          <div className='mt-5'>
            <button className='btn rounded-full mr-5'>Become a Merchant</button>
            
            <button className='btn rounded-full'>Eearn with ZapShift Coureir</button>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default MarchantSatisfaction;