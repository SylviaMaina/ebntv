import React from "react";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../Components";
import { getPosts } from "../Services";
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
import Pagination from "@mui/material/Pagination";

export default function Home({ title, label, news, posts }) {
  const itemsPerPage = 12;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(Math.ceil(posts.length / itemsPerPage));

  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(posts);
  return (
    <div>
      <div className="container mx-auto px-10 mb-8 ml-2 mt-2 h-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-2">
            <iframe
              src="https://www.youtube.com/embed/PeXBAH1Rfak"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
              className={styles.iframe}
            ></iframe>
          </div>

          <div className="lg:col-span-4 col-span-1 ">
            <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
              <img src="ebn.png" alt="ebn tv logo" className="h-10" />
              <h3>Top Shows</h3>

              {/* <div className="show">
                <img src="Manukato.jpg" alt="manukato show" className="h-20 " />
                <div className="text-sm font-medium">
                  <h4>Manukato Show</h4>
                  <h6>
                    This is a youth show that aims empower, enable and
                    emancipate the youth to tackle those challenges and hoping
                    them to be the best version of themselves in life.
                  </h6>
                  <h6>Every Saturday: 05:00pm</h6>
                </div>
              </div> */}
              <div className="show">
                <img
                  src="Requesthour.jpg"
                  alt="manukato show"
                  className="h-20"
                />
                <div className="text-sm font-medium">
                  <h4>Request Hour</h4>
                  <h6>
                    A show where the viewer gets to share and show off their
                    individual taste in music from their favorite artists.
                  </h6>
                  <h6>Every Saturday: 05:00pm</h6>
                </div>
              </div>
              <div className="show">
                <img src="Majira.jpg" alt="manukato show" className="h-20" />
                <div className="text-sm font-medium">
                  <h4>Majira ya EBN</h4>
                  <h6>
                    This is a discussion about leadership matters in both the
                    national level family level and church level of leadership
                  </h6>
                  <h6>Every Saturday: 05:00pm</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10 mb-8">
        <div className="info">
          <h4>
            {title} <span>{label}</span>
          </h4>
          <h6>{news}</h6>
        </div>
        <Head>
          <title>EBN TV</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .sort((a, b) => (a.post > b.post ? 1 : -1))
              .map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
            <Pagination
              count={noOfPages}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </div>

          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 mb-8 mt-2 h-50 bg-blue-900 shadow-lg rounded-lg">
        <div className={styles.infos}>
          <div className={styles.menu}>
            <h2>About</h2>

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
          <div className={styles.contact}>
            <h2>Contact Info</h2>
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
        <div className={styles.socials}>
          <FacebookRoundedIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
        <h6 className={styles.copy}>
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
