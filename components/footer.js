import React from "react";

import Form from "./Form";

import styles from "../styles/Footer.module.css";
import { SocialIcon } from "react-social-icons";
import ScrollAnimation from "react-animate-on-scroll";

export default function Panel() {
  return (
    <div>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className={styles.Pane__Main}>
          <div className={styles.Pane__Box}>
            <h1>Contact Us</h1>
            <Form />
          </div>
        </div>
        <div className={styles.Footer}>
          <div className={styles.map}>
            <iframe
              title="maps"
              width="100%"
              height="300px"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWoKnIqMOJ1npXjMd3GXbknzUSLWYga0Q
    &q=The+Way+Coffee+House"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.Footer__Socials}>
            <SocialIcon url="https://www.instagram.com/the_way_dunstable/" />
            <SocialIcon url="https://www.facebook.com/thewaydunstable/" />
            <SocialIcon url="http://youtube.com/" />
          </div>
          <div className={styles.Footer__Content}>
            <p> (c) The Way Coffee House</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
