import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer";
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
     <Footer/>
    </div>
  );
}

export default Contact;
