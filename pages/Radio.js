import React from "react";
import Footer from "../Components/Footer";

const Radio = () => {
  return (
    <>
    <div>
    <img src="mshindi.png" alt="mshindi" className=" w-48 h-32 mx-auto"/>
    </div>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe className="w-2/3 h-[30rem] mt-5 mx-auto" style={{maxWidth: "100%",maxHeight: "100%", border:"none"}} src="https://stream-151.zeno.fm/yv2atgaaz3yuv?zs=EsL8HYmjRSS1limxx4CLAA " frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay" scrolling="no" videoLengthInSeconds="0">iFrame is not supported!</iframe></div>                    
    <Footer/>
    </>
  );
};

export default Radio;
