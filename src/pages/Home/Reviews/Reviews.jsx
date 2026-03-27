import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div className="my-24">
      <div className="text-center mb-24">
        <h3 className="text-center text-3xl font-bold my-8"> Review</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          autem nesciunt odio nam earum voluptatum ea repellat a voluptas quasi?
        </p>
      </div>

      <Swiper
        // loop={true}
        effect={"coverflow"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        // modules={[Autoplay, EffectCoverflow, Pagination]}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        // pagination={true}
       
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;