import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import { CgArrowTopRight } from 'react-icons/cg';

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <button className="btn btn-primary text-secondary rounded-full absolute right-270 top-115">
          Track Your Parcel
        </button>
        <button className="btn btn-secondary text-primary rounded-full absolute right-256 top-115">
          <a className="">
            <CgArrowTopRight />{" "}
          </a>
        </button>
        <button className="btn btn-border text-secondary rounded-full absolute right-230 top-115">
          Be A rider
        </button>
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
