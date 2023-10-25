import React from "react";
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

function About() {
  return (
    <>
      <div className="container mx-auto px-10 mb-8 mt-2 h-50 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-large p-1">About Us</h2>
        <h6 className="text-md font-medium">
          EBN tv was found in the year 2020 and licensed by communication
          authority in Kenya. During the period of its existence, we have
          evolved into a dynamic commercial tv station that pays great attention
          to the trade-production enterprise. At EBN tv station we broadcast 24
          hours on all free to air decoders. Our signal is available in over 8
          counties namely Nairobi, Kiambu, Kajiado, Muranga, Embu, Kirinyaga,
          Machakos and Kitui counties. EBN is dedicated to the development of
          broadcasting, media, and the advertising industry, along with the
          advancement of culture and art. Our core business is to deliver
          informative, educational and entertaining programs 24 hours a day
          geared towards life transformation. Our editorial team is committed to
          upholding quality, integrity and balance in our broadcasts as we seek
          to transform the society by positively impacting on the social,
          economic and political space. Mission and vision Our vision is to
          transform lives through our broadcasts. As a representative English
          and Kiswahili broadcasting station we provide a balanced program mix
          to archive this. Our experienced team of specialists is ready to
          implement any customer requirement and remains engaged throughout the
          whole process, from the project design, technology delivery, to
          broadcasting. Each project is always handled individually according
          the specific customer needs and requirements. Our youthful and dynamic
          production team is well equipped to produce high quality and creative
          TV concepts to deliver a client’ message home to the target audience.
          Our approach to any business is to focus on the customer. In every
          project we endeavor to meet our clients’ needs, taking into account
          potential future engagements. By adopting this strategy, we strive for
          continually improving our position in the Kenyan market. Our employees
          are the crucial engine for achieving the level and quality of
          deliveries and working environment. The management have ensured a
          dynamic environment in which the employees are involved actively and
          motivated to achieve the defined goals.
        </h6>
      </div>
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
    </>
  );
}

export default About;
