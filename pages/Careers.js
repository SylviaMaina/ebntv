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
function Careers() {
  return (
    <div className="text-white mt-2 h-72 bg-blue-900 shadow-lg flex flex-col justify-evenly">
    <div className="flex ">
      <div className="flex flex-row justify-between w-3/4 px-24 pt-4">
        <div className="w-1/2 leading-6 text-xl">
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
        <div className="text-xl w-1/2 ">
          <h2 className="text-2xl border-b-white border-b-2 w-3/4">
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
      <div className="flex flex-col justify-between w-1/2 px-24 pt-4">
        <h4 className="text-2xl border-b-white border-b-2 w-3/4">
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
  );
}

export default Careers;
