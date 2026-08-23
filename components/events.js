import React from "react";
import styles from "../styles/Events.module.css"
import EventCard from "../components/eventCard";
import { InfoBox, AlertBox } from "../components/box";
//const eventData = require('./data/events.json');
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.js";

export default function Events() {
  const needleandthread =
    "If you enjoy sewing or would like to learn how to sew, then Needle and Thread is the group for you. We are a large, friendly group of people with a range of abilities. You can take part in patchwork, embroidery, stitcheries, beadwork, toymaking and anything else involving a needle and thread. You’d be really welcome to join us, whatever the level of skill you have, and each week we enjoy a thought for the week from the Bible as well. Tea, coffee and biscuits are provided and there is no charge for attending – bring your own project or purchase a patchwork kit. Click here to find out more.";
  const bookclub =
    "Book Club is for anyone who loves to read and wants to widen their literary horizons. As a group we seek to choose books that everyone will enjoy, so expect a mix of the classic and the modern, drama, mystery, travel, comic and autobiography. Meetings are informal and relaxed as we open up free discussion centering on the chosen book. You can join the group at any time as we have a new book every month, and the book for the following month is available to buy for just a few pounds. Click here to find out more.";
  const art =
    "Watercolours, gouache, oils, pen and pencil, poetry – whatever your thing is – Art provides space and mutual encouragement plus friendship. We welcome anyone who already has an interest, or who would like to learn, and we try to introduce inspiration each week to help you develop and express your creative abilities. We meet during school term times at the rear of The Way Coffee House on a Tuesday from 10am till 12 noon. Click here to find out more.";
  const knit =
    "Come and relax with Pauline and friends as they share their skills – knitting, crochet, cross-stitch or nattering! Looking to start a new hobby, or learn a new skill? Want to pick up the stitches you dropped years ago? Just want some company? You can start something new or complete an article you are already working on. We have patterns, knitting needles, crochet hooks, wool, aida and silks available to get you started, with refreshments during the morning and a stimulating talk from the Bible. Click here to find out more.";
  const wed =
    "On Wednesday evenings we keep the Coffee House open til 9pm. It’s the perfect chance to catch up with friends over the excellent coffee and cakes that we have to offer, and it’s when some of our evening groups meet: Game On! board games night on the first Wednesday of the month and Book Club on the second. All are welcome. More information can be found in the Way or by clicking here.";
  const gameon =
    "Game On! is for anyone who likes playing board games and wants to meet with friends old and new while enjoying a selection of drinks and snacks from The Way Coffee House. A selection of games are provided and you are welcome to bring your own. Click here to find out more.";
  const workshop =
    "Would you like to get out of your shed and join like-minded people in our cabin? Workshop Wednesdays is our Men’s Shed activity which is open to all. We regularly have demonstrations and talks about tools and techniques, and as equipment, materials and expertise increase, practical sessions will be held so you can try your hand at what you’ve learnt. Join us for coffee in The Cabin @ The Way Coffee House. Click here to find out more.";
  return (
    <div className={styles.Events__Container} id="events">
        <style>{`
        
  .Events__intro__alert > div {
    width: 90vw;
    max-width: 800px;
    color: black;
    border: 4px solid red;
  }

  .Events__intro > div {
    width: 90vw;
    max-width: 800px;
  }     
        `}
        </style>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className={styles.Events__header}>
          <div className={styles.Events__Title__Container} id="events">
            <div className={styles.title__left}> </div>
            <h1 className={styles.Events__Title}>OUR EVENTS</h1>
            <div className={styles.title__right}> </div>
          </div>
          <div className={styles.Events__intro__alert}>
            <AlertBox url="/api/wp" type="alert" />
          </div>
          <div className={styles.Events__intro}>
            <InfoBox url="/api/wp" type="info" />
          </div>
        </div>
      </ScrollAnimation>
      <div className={styles.Events__Main}>
        <EventCard
          img="/events/Ministry-Posters-Book-Club.jpeg"
          title="Book Club"
          text={bookclub}
          time="2nd Wednesday of the month – 7:45pm."
        />
        <EventCard
          img="/events/Needle-and-Thread.jpg"
          title="Needle and Thread"
          text={needleandthread}
          time="Alternate Mondays – 9:45am-12:15pm."
        />
        <EventCard
          img="/events/Ministry-Posters-Art.webp"
          title="Art"
          text={art}
          time="Tuesdays – 10am-12pm – During term time."
        />
        <EventCard
          img="/events/Ministry-Posters-Knit-Natter.jpeg"
          title="Knit & Natter"
          text={knit}
          time="Friday mornings – During term time."
        />
        <EventCard
          img="/events/Workshop-Wednesdays.jpg"
          title="Workshop Wednesdays"
          text={workshop}
          time="Wednesdays – 9:30am-11am – During term time."
        />
        <EventCard
          img="/events/Game-On.jpg"
          title="Game On!"
          text={gameon}
          time="1st Wednesday of the month – 7:30pm."
        />
        <EventCard
          img="/events/Coffee-Shop.jpeg"
          title="Wednesday Evenings"
          text={wed}
          time="Wednesday evenings, til 9pm."
        />
      </div>{" "}
    </div>
  );
}
