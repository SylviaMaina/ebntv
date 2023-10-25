import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Slider from "react-slick";
import { ArrowForward, HorizontalRule } from "@mui/icons-material";

function Videos() {
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
    < >
      <div className="relative ">
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
        <div className="ml-24 mt-10 max-lg:ml-0">
          <div className="">
            <h2 className="text-2xl mb-4">
              Kingdom Ministries Reality Hour <HorizontalRule />
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2">
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/elQ606ydWUo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/elQ606ydWUo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/HYPjVTDjhIo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/Io0u3QHkjng"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <Link href="https://www.youtube.com/@EcclesiaBroadcastingNetwork/playlists">
                <h6 className="mt-4">
                  View More <ArrowForward className=" animate-pulse" />
                </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-24 max-lg:ml-0 mt-10">
          <div className="">
            <h2 className="text-2xl mb-4">
              The Bible Theology Show With Rev.Felix Kavoi <HorizontalRule />
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2">
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/uqbMJcsOirY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/1C_IBP8nXOE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/YIMD3FZHAk0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/vNpPZTkuDZw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <Link href="https://www.youtube.com/@EcclesiaBroadcastingNetwork/playlists">
                <h6 className="mt-4">
                  View More <ArrowForward className=" animate-pulse" />
                </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-24 max-lg:ml-0 mt-10">
          <div className="">
            <h2 className="text-2xl mb-4">
              Victory Through The Word <HorizontalRule />
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2">
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/4kq5h6uC77c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/3W31ssSsT5w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/AjYwD-HYMYM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/4W-zEtdLQeA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <Link href="https://www.youtube.com/@EcclesiaBroadcastingNetwork/playlists">
                <h6 className="mt-4">
                  View More <ArrowForward className=" animate-pulse" />
                </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-24 max-lg:ml-0 mt-10">
          <div className="">
            <h2 className="text-2xl mb-4">
              Blessed Hope Hour With Rev. Felix Kavoi
              <HorizontalRule />
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2">
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/wrseHzwRb2Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/sKp7fl44RKM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/hKJK3wfILKE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <iframe
                className="w-11/12 h-full rounded"
                src="https://www.youtube.com/embed/3cB5Bc9VOik"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />{" "}
              <Link href="https://www.youtube.com/@EcclesiaBroadcastingNetwork/playlists">
                <h6 className="mt-4">
                  View More <ArrowForward className=" animate-pulse" />
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white mt-2 h-72 bg-blue-900 shadow-lg flex flex-col justify-evenly max-lg:flex-col max-lg:h-fit ">
        <div className="flex max-lg:flex-col max-lg:px-4 ">
          <div className="flex flex-row justify-between w-3/4 px-24 pt-4  max-lg:flex-col max-lg:w-full max-lg:px-0">
            <div className="w-1/2 leading-6 text-xl max-lg:w-full">
              <h2 className="text-2xl border-b-white border-b-2 w-3/4">
                About
              </h2>

              <Link href="/About">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  About Us
                </h6>
              </Link>

              <Link href="/Careers">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Careers
                </h6>
              </Link>

              {/* <Link href="/Ads">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Advertise With Us
                </h6>
              </Link> */}
              <Link href="/Schedule">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Tv Programming
                </h6>
              </Link>

              <Link href="/Contact">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Contact Us
                </h6>
              </Link>
            </div>
            <div className="text-xl w-1/2 max-lg:w-full max-lg:leading-8 max-lg:mt-2 ">
              <h2 className="text-2xl   border-b-white border-b-2 w-3/4">
                Contact Info
              </h2>
              <h6>
                <PhoneForwardedIcon
                  style={{
                    color: "#DF8E03",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                +254 740 653 453 | +254876469834
              </h6>
              <h6>
                <MailIcon
                  style={{
                    color: "#DF8E03",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                info@ebntv.ac.ke
              </h6>
              <h6>
                <LocationOnIcon
                  style={{
                    color: "#DF8E03",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                Along Rabai rd, next to buruburu girls high school.
              </h6>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/2 px-24 pt-4 max-lg:w-full max-lg:px-0">
            <h4 className="text-2xl border-b-white border-b-2 w-3/4 ">
              Socials
            </h4>
            <h6>
              <FacebookRoundedIcon />
              Facebook
            </h6>
            <h6>
              <TwitterIcon />
              Twitter
            </h6>
            <h6>
              <YouTubeIcon />
              YouTube
            </h6>
            <h6>
              <InstagramIcon />
              Instagram
            </h6>
            <h6>
              <LinkedInIcon />
              LinkedIn
            </h6>
          </div>
        </div>{" "}
        <h6 className="pl-24 max-lg:pl-0">Copyright © 2022 Ebn Tv. All Rights Reserved</h6>
      </div>
    </>
  );
}

export default Videos;
