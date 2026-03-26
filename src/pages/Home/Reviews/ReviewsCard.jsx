import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  

  return (
    <div className="max-w-md p-6 bg-base-100 rounded-2xl shadow-md">
      {/* Quote icon */}
      <FaQuoteLeft className="text-primary text-3xl mb-4" />

      {/* Quote text */}
      <p className="mb-4">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-400 my-6"></div>

      {/* Author section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center text-white font-semibold">
          <img src={user_photoURL} alt="" />
        </div>

        {/* Name & role */}
        <div>
          <h4 className="font-semibold text-teal-900">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
