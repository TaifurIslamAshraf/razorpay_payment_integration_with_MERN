import React from "react";

const Card = ({ amount, image, chackoutHandler }) => {
  return (
    <div className=" text-center m-auto w-[300px] h-[300px] bg-gray-200 p-4 rounded-md ">
      <img
        className="pb-3 w-full h-[200px] object-cover"
        src={image}
        alt="logo"
      />
      <p className="font-semibold text-lg mb-2">Price: {amount}</p>
      <button
        className="p-2 bg-slate-400 font-bold text-white rounded-md"
        onClick={() => chackoutHandler(amount)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
