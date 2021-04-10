import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";
import Carousel from "nuka-carousel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.Panel__Main}>
      {/* <Carousel} autoplay={true} autoplayInterval={7000} wrapAround={true}>  <div className="bg_1"></div>          </Carousel>*/}
      <div className={styles.bg_2}>
        <Image
          src="/min/coffeemachine-min.webp"
          objectFit="cover"
          layout="fill"
          priority={true}
          quality={25}
        ></Image>
      </div>
      {/*
        <div className={styles.bg_3}>
          <Image
            src="/min/cake-min.webp"
            objectFit="cover"
            layout="fill"
            quality={25}
          ></Image>
        </div>
        <div className={styles.bg_4}>
          <Image
            src="/min/coffee-min.webp"
            objectFit="cover"
            layout="fill"
            quality={25}
          ></Image>
        </div>
                */}

      <div className={styles.Panel__Box}>
        <Image
          alt="The Way Logo"
          src="/min/logo.webp"
          className={styles.logo}
          width={220}
          height={275}
          priority={true}
          quality={15}
        ></Image>
        <div className={styles.Main__Buttons}>
            <Link size="large" variant="contained" href="/menu">
              Our Menu
            </Link>
            <Link size="large" variant="contained" href="#events">
              Our Events
            </Link>
            <Link size="large" variant="contained" href="#about">
              About Us
            </Link>
          </div>
      </div>
    </div>
  );
}
