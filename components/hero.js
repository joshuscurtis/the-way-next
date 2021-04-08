import styles from '../styles/Home.module.css'
import Button from "@material-ui/core/Button";
import Carousel from "nuka-carousel";

export default function Hero() {
    return (
<div className={styles.Panel__Main}>
<Carousel autoplay={true} autoplayInterval={5000} wrapAround={true}>
  {/*<div className="bg_1"></div>*/}
  <div className={styles.bg_2}></div>
  <div className={styles.bg_3}></div>
  <div className={styles.bg_4}></div>
</Carousel>
<div className={styles.Panel__Box}>
  <img
    alt="The Way Logo"
    src="min/logo-min.jpg"
    className={styles.logo}
  ></img>
  <div className={styles.Main__Buttons}>
    <Button
      size="large"
      className={styles.Menu__Button}
      variant="contained"
      href="/menu"
    >
      Our Menu
  </Button>
    <Button size="large" variant="contained">
      Our Events
  </Button>
    <Button size="large" variant="contained">
      About Us
  </Button>
  </div>
</div>
</div>)}