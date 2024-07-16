import React from "react";

function SingleExperience() {
  return (
    <>
      <div className="md:min-h-48 bg-[#ffffffb7] w-full mt-10 md:mt-14 rounded-[0.5rem] md:rounded-[3rem] flex 1">
        <div className="w-2/5 rounded-l-[0.5rem] md:rounded-l-[3rem] bg-[#1f1f1f] flex justify-center items-center px-3 md:p-10">
          <img
            src="https://digismiths.com/wp-content/uploads/2023/01/digismiths-logo-black-theme.svg"
            alt="Digismiths"
          />
        </div>
        <div className="w-4/5 md:w-3/5 rounded-r-[0.5rem] md:rounded-r-[3rem] p-6 md:p-10 flex flex-col">
          <div className="text-black text-xl md:text-4xl">
            FULL STACK DEVELOPER
          </div>
          <div className="text-black font-light text-sm md:text-xl mt-2 md:mt-4">
            1/4/2024 - Present
          </div>
          <div className="text-black mt-5 hidden sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            aspernatur est velit in, doloribus sed expedita molestiae beatae
            vero explicabo, eius deleniti blanditiis. Saepe ipsum quibusdam
            dolores quo esse consequatur facere iste, aliquam harum vel modi,
            aperiam ullam id. Ad?
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleExperience;
