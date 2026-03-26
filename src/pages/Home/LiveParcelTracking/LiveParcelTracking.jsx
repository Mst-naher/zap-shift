import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../../../public/images/live-tracking.png"
import img2 from "../../../../public/images/safe-delivery.png"
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

const LiveParcelTracking = () => {
  return (
    <Marquee>
      <div className="flex gap-20 lg:gap-60 m-20">
       
        <div className="flex justify-center items-center gap-5 bg-blue-300 p-3 rounded-2xl text-blue-900">
          <img className="w-35" src={img1} alt="" />
          <div>
            <h1>
              <PiDotsThreeOutlineVerticalLight />
            </h1>
          </div>
          <h2 className="lg:text-2xl font-bold">Parcel Live Tracking</h2>
        </div>
        <div className="flex justify-center items-center gap-5 bg-blue-300 p-3 rounded-2xl text-blue-900">
          <img className="w-30" src={img2} alt="" />
          <div>
            <h1>
              <PiDotsThreeOutlineVerticalLight />
            </h1>
          </div>
          <div className="">
            <h2 className="lg:text-2xl font-bold"> Safe Delivery</h2>
            <p>lsdkfj oejif</p>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default LiveParcelTracking;