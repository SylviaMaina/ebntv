import React from "react";
import Footer from "../Components/Footer";

const Live = () => {
  return (
    <>
      <div class="embed-responsive embed-responsive-16by9"><iframe className="w-11/12 h-screen mt-5 mx-auto" style={{maxWidth: "100%",maxHeight: "100%", border:"none"}} src="https://goliveafrica.media/live/1/EBNTV?embed=1" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay" scrolling="no" videoLengthInSeconds="0">iFrame is not supported!</iframe></div>                    
    <Footer/>
    </>
  );
};

export default Live;
