import React, { useState } from "react";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../Components";
import { getHeaderImage, getPosts } from "../Services";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Slider from "react-slick";
import { HorizontalRule } from "@mui/icons-material";
import { Divider, Pagination, Stack } from "@mui/material";

export default function Home({ title, label, news, posts }) {
  const [header, setHeader] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  React.useEffect(() => {
    getHeaderImage().then((newHeader) => {
      setHeader(newHeader[0].headerImage);
    });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className=" h-1/2 mb-10">
        <Slider {...settings}>
          {header.map((image, index) => {
            return (
              <div className="" key={index.id}>
                <img
                  src={image?.url}
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                  className="w-full h-[40rem]"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="container mx-auto pl-24 mb-8 max-lg:px-4">
        <div className="">
          <h4>
            {title} <span>{label}</span>
          </h4>
          <h6>{news}</h6>
        </div>
        <Head>
          <title>EBN TV</title>
          <link rel="icon" href="/ebn.png" />
        </Head>
        <div className="">
          <h2 className="text-2xl">
            Latest EBN News
            <HorizontalRule />
          </h2>
          <div className="grid grid-cols-3 gap-4 max-lg:flex flex-col max-lg:ml-0">
            {postsToDisplay.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>
          <Pagination
            count={Math.ceil(posts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />

          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-4">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <div className="text-white mt-2 h-96 bg-blue-900 shadow-lg flex flex-col justify-between max-lg:flex-col max-lg:h-fit">
        <div className="flex mt-4 justify-between max-lg:flex-col max-lg:px-4 ">
          <div className="flex flex-row justify-evenly w-11/12 mx-auto px-24 pt-4  max-lg:flex-col max-lg:w-full max-lg:px-0">
            <div className="text-xl justify-between max-lg:w-full max-lg:leading-8 max-lg:mt-2">
              <h2 className="text-2xl border-b-white border-b-2 w-3/4">
                About
              </h2>
              <div className="flex flex-col justify-between h-full">
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
            </div>
            <div className="text-xl justify-between max-lg:w-full max-lg:leading-8 max-lg:mt-2 ">
              <h2 className="text-2xl   border-b-white border-b-2">
                Contact Info
              </h2>
              <div className="flex flex-col justify-between h-full">
                <h6>
                  <PhoneForwardedIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  +254 740 653 453 | +254 876 469 834
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
            <div className="text-xl justify-between max-lg:w-full max-lg:leading-8 max-lg:mt-2">
              <h4 className="text-2xl border-b-white border-b-2 ">Socials</h4>
              <div className="flex flex-col justify-between h-full">
                <Link href="https://www.facebook.com/TvEBN/">
                  <h6>
                    <FacebookRoundedIcon />
                    Facebook
                  </h6>
                </Link>
                <Link href="https://www.twitter.com/TvEbn">
                  <h6>
                    <TwitterIcon />X
                  </h6>
                </Link>

                <Link href="https://www.youtube.com/@EcclesiaBroadcastingNetwork">
                  <h6 className="cursor-pointer text-pink ">
                    <YouTubeIcon />
                    YouTube
                  </h6>
                </Link>
                <Link href="instagram.com/tv_ebn">
                  <h6>
                    <InstagramIcon />
                    Instagram
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h6 className="pl-24 mb-2">
          Copyright © 2022 Ebn Tv. All Rights Reserved
        </h6>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
