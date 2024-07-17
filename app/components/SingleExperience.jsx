import React from "react";

function SingleExperience({ item }) {
  return (
    <>
      <div className="md:min-h-48 bg-[#ffffffb7] w-full mt-10 md:mt-14 rounded-[0.5rem] md:rounded-[3rem] flex 1">
        <div className={item.class}>
          <img src={item.imgURL} alt="Digismiths" />
        </div>
        <div className="w-4/5 md:w-3/5 rounded-r-[0.5rem] md:rounded-r-[3rem] p-6 md:p-10 flex flex-col">
          <div className="text-black text-xl md:text-4xl">
            {item.designation}
          </div>
          <div className="text-black font-light text-sm md:text-xl mt-2 md:mt-4">
            {item.date}
          </div>
          <div className="text-black mt-5 hidden sm:block">
            {item.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleExperience;
