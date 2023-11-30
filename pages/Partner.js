import React from "react";
import Footer from "../Components/Footer";

const Partner = () => {
  return (
    <>
      <div className="w-1/2 max-lg:w-11/12 container mx-auto my-4">
        <h4 className="capitalize font-medium text-xl text-center max-lg:text-justify">
          Want to support this great ministry of the Lord? Feel free to send
          your contributions to the platform below
        </h4>
      </div>
      <div className="h-[40rem] max-lg:h-3/4">
      <img src="partner.png" alt="partner with EBN TV"
          className="w-2/3 h-full container mx-auto "
      />
      </div>
     <Footer/>
    </>
  );
};

export default Partner;
