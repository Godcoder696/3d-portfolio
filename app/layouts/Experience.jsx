import React from "react";

function Experience() {
  return (
    <div className="pt-32 w-[90%] flex flex-col items-center">
      <div>[ EXPERIENCE ]</div>
      <div className="min-h-96 bg-[#ffffffb7] w-full mt-14 rounded-[3rem] flex">
        <div className="w-2/5 rounded-l-[3rem] bg-[#1f1f1f] flex justify-center items-center p-10">
          <img
            src="https://digismiths.com/wp-content/uploads/2023/01/digismiths-logo-black-theme.svg"
            alt="Digismiths"
          />
        </div>
        <div className="w-3/5 rounded-r-[3rem] p-10 flex flex-col">
          <div className="text-black text-4xl">FULL STACK DEVELOPER</div>
          <div className="text-black font-light text-xl mt-4">
            1/4/2024 - Present
          </div>
          <div className="text-black mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            incidunt nobis ab adipisci. Laudantium modi adipisci minima cum
            facilis, excepturi esse similique magni alias fugit eligendi optio
            harum obcaecati facere, dignissimos ut nesciunt officiis nam minus
            nihil? Fugiat nulla, assumenda rem autem eum, itaque molestiae
            inventore labore ipsa reiciendis exercitationem porro sapiente est
            animi quas minus quibusdam sint quidem suscipit asperiores! Illo
            corporis aspernatur, perspiciatis id, ullam dolores dicta amet ad
            vero laboriosam quae, ducimus harum nam. Sed, culpa harum!
          </div>
        </div>
      </div>
      <div className="w-full mt-4 flex justify-center space-x-3">
        <div className="h-4 w-4 rounded-full bg-white"></div>
        <div className="h-4 w-4 rounded-full bg-[#ffffffb7]"></div>
        <div className="h-4 w-4 rounded-full bg-[#ffffffb7]"></div>
      </div>
    </div>
  );
}

export default Experience;
