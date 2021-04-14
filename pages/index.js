import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Events from "../components/events";
import FloatingActionButton from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ArrowUpward";
import Footer from "../components/footer"

import Gallery from "../components/gallery"

export default function Home() {
  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    zIndex: 1000,
  };
  return (
    <div>
      <Head>
        <title>The Way Coffee House | Coffee & Cake in Dunstable</title>
        <meta name="description" content="Now Open! The Way Coffee House serves coffee which is top quality, award winning, hand roasted and Fairtrade.  In addition to coffee we have quality teas, cold drinks, Zuma hot chocolate to satisfy any chocaholic, scrummy cakes and light refreshments – all at affordable prices"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="/style/animate.min.css"
        />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <FloatingActionButton style={style}>
        <AddIcon />
      </FloatingActionButton>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Footer/>
    </div>
  );
}
