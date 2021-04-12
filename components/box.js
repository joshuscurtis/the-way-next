import React, { useState, useEffect } from "react";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Feed from "react-instagram-authless-feed";
import { SocialIcon } from "react-social-icons";
import axios from "axios";
import styles from "../styles/Box.module.css";

export function Box(props) {
  return (
    <div className={styles.Box__Container}>
      <CardContent>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </div>
  );
}

export function Insta(props) {
  return (
    <div className={styles.Insta__Container} variant="outlined">
      <Feed
        userName="the_way_dunstable"
        className="Insta"
        classNameLoading="Loading"
      />
      <style>{`
                .Insta > a > img {
            width: 26.5vw;
            height: 26.5vw;
            min-width: 70px;
            min-height: 70px;
            max-width: 300px;
            max-height: 300px;
            margin: 1vh;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            transition: transform 0.2s;
            }

            .Insta > a > img:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
            transform: scale(1.045);
            }

@media only screen and (min-width: 1200px) {
    .Insta > a > img {
      width: 30vw;
      height: 30vw;
    }
    .Insta {
      width: 90vw;
    }
  }
`}</style>
    </div>
  );
}

export function News(props) {
  const [updateData, setUpdateData] = useState("loading");

  useEffect(() => {
    async function fetchData() {
      const request2 = await axios.get(props.url);
      setUpdateData(
        request2.data.news.replace(/<[^>]*>?/gm, "")

      );
      console.log(updateData);

      return request2;
    }
    fetchData();
  }, [updateData, props.url]);
  if (updateData === "loading") {
    return (
      <div className={styles.Box__Container}>
        <div className="News">
          <Typography className={styles.Box__Title} variant="h5" component="h5">
            {props.title}
          </Typography>
          <Typography
            className={styles.content}
            variant="subtitle"
            component="p"
          >
            {props.content}
          </Typography>
        </div>
        <div className={styles.Box__Socials}>
          <SocialIcon url="https://www.instagram.com/the_way_dunstable/" />
          <SocialIcon url="https://www.facebook.com/thewaydunstable/" />
          <SocialIcon url="http://youtube.com/" />
        </div>
      </div>
    );
  }
  if (updateData !== "loading") {
    return (
      <div className={styles.Box__Container}>
        <div className={styles.News}>
          <Typography className={styles.Box__Title} variant="h5" component="h5">
            {props.title}
          </Typography>
          {updateData}
        </div>
        <div className={styles.Box__Socials}>
          <SocialIcon url="https://www.instagram.com/the_way_dunstable/" />
          <SocialIcon url="https://www.facebook.com/thewaydunstable/" />
          <SocialIcon url="http://youtube.com/" />
        </div>
      </div>
    );
  }
}

export function BoxWithFetch(props) {
  const [updateData, setUpdateData] = useState("loading");

  useEffect(() => {
    async function fetchData() {
      const request2 = await axios.get(props.url);
      console.log(request2.data[0].content);
      setUpdateData(
        request2.data[0].content.rendered.replace(/<[^>]*>?/gm, "")
      );
      console.log(updateData);

      return request2;
    }
    fetchData();
  }, [updateData, props.url]);
  if (updateData === "loading") {
    return (
      <div className={styles.Box__Container}>
        <div className={styles.News}>
          <Typography className="Box__Title" variant="h5" component="h5">
            {props.title}
          </Typography>
          <Typography className="content" variant="subtitle" component="p">
            {props.content}
          </Typography>
        </div>
      </div>
    );
  }
  if (updateData !== "loading") {
    return (
      <div className={styles.Box__Container}>
        <CardContent>
          <Typography variant="body2" component="p">
            {updateData}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </div>
    );
  }
}

export function OpeningTimes(props) {
  return (
    <div className={styles.Box__Container}>
      <div className={styles.OpeningTimes}>
        <Typography className={styles.Box__Title} variant="h5" component="h5">
          {props.title}
        </Typography>
        <p className={styles.times}>
          <b>Monday:</b> {props.mon}
        </p>
        <p className={styles.times}>
          <b>Tuesday</b>: {props.tue}
        </p>
        <p className={styles.times}>
          <b>Wednesday</b>: {props.wed}
        </p>
        <p className={styles.times}>
          <b>Thursday</b>: {props.thu}
        </p>
        <p className={styles.times}>
          <b>Friday</b>: {props.fri}
        </p>
        <p className={styles.times}>
          <b>Saturday</b>: {props.sat}
        </p>
        <p className={styles.times}>
          <b>Sunday</b>: {props.sun}
        </p>
      </div>
    </div>
  );
}
