import React, { useState } from "react";
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
function Contact() {
  const [name, setName] = useState("");
  return (
    <div>
      <div className={styles.contacts}>
        <form className={styles.formy}>
          <label> Name</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> Phone</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> Email </label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> Subject</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> Tell us more </label>
          <textarea
            type="textarea"
            value={name}
            className={styles.textarea}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <div className="mx-auto ml-20">
          <button className={styles.form}>Send</button>
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
              +25468387608 | +254876469834
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

export default Contact;
