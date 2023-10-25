import React from "react";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../Components";
import { getPosts } from "../Services";
import Link from "next/link";
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
import { HorizontalRule } from "@mui/icons-material";

export default function Home({ title, label, news, posts }) {
  const itemsPerPage = 9;
  const [page, setPage] = React.useState(1);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  return (
    <div>
      <div className=" mt-2 h-1/2">
        <Slider {...settings} className="flex flex-row pb-12 mb-8 h-full">
          <div className="">
            <img
              src="Manukato.jpg"
              alt="manukato show"
              className=" h-[38rem] w-full"
            />
          </div>
          <div className="">
            <img
              src="Requesthour.jpg"
              alt="manukato show"
              className=" h-[38rem] w-full"
            />
          </div>
          <div className="">
            <img
              src="Majira.jpg"
              alt="manukato show"
              className=" h-[38rem] w-full"
            />
          </div>
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
            {posts
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .sort((a, b) => (a.post > b.post ? 1 : -1))
              .map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
          </div>

          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-4">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <div className="text-white mt-2 h-72 bg-blue-900 shadow-lg flex flex-col justify-evenly max-lg:flex-col max-lg:h-fit">
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
        <h6 className="pl-24">Copyright © 2022 Ebn Tv. All Rights Reserved</h6>
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
