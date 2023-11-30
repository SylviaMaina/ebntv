import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import { ArrowForward, HorizontalRule } from "@mui/icons-material";
import Footer from "../Components/Footer";
import { getVideos } from "../Services";
import { Divider } from "@mui/material";
function Videos() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    getVideos().then((newHeader) => {
      setVideos(newHeader);
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrow: false,
  };

  return (
    <>
      <div className="relative border border-pink-700">
        <Slider {...settings} className="blur-[1px] mt-4">
          <div>
            <img src="/Kingdom.png" alt="kingdom show" />
          </div>
          <div>
            <img src="/Kavoi.png" alt="Gospel hour show" />
          </div>
          <div>
            <img src="/Dominion.png" alt="Dominion show" />
          </div>
          <div>
            <img src="/Profi;e.png" alt="Profile show" />
          </div>
          <div>
            <img src="Victory.png" alt="The Victory show" />
          </div>
        </Slider>
        <div className="absolute h-48 w-full text-center max-lg:w-full top-10 max-lg:h-32 max-lg:top-0">
          <div className={styles.home}>
            <h2 className="text-5xl font-base text-white py-8 max-lg:text-2xl">
              Your home for shows that will
              <span className=" text-blue-900 ml-2 capitalize">
                Transform Your World!
              </span>
            </h2>
          </div>
        </div>
        <div className="flex max-lg:flex-col container mx-auto ">
          <div className=" bg-sky-100 shadow-lg border border-blue-800 rounded-lg p-4 mr-4 mb-8 mt-10 max-lg:ml-0 max-lg:w-full">
            {videos.map((data) => (
              <div className="m-4" key={data.videoCategory}>
                <h2 className="text-2xl mb-4">
                  {data.videoCategory}
                  <HorizontalRule />
                </h2>
                <div className="grid grid-cols-4 max-lg:grid-cols-2">
                  {data.video.map((item) => (
                    <iframe
                      key={item.id}
                      className="w-11/12 h-full rounded"
                      src={item.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ))}
                </div>
                <Divider/>
              </div>
            ))}
          </div>
          <div className="bg-sky-100  shadow-lg rounded-lg p-8 mt-10 h-fit mr-4 w-1/3 max-lg:w-1/2 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
              Shows By EBN TV
            </h3>
            {videos.map((data) => (
              <div
                key={data.videoCategory}
                className="flex items-center w-full hover:text-sky-500 mb-4"
              >
                <Link href={data.playlistUrl} key={data.videoCategory} className="text-md">
                  {data.videoCategory}
                  <Divider />
                </Link>
                <Divider />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Videos;
