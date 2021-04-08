import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Events from "../components/events";
import FloatingActionButton from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ArrowUpward";
import Footer from "../components/footer"

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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
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
      <Events />
      <Footer/>
    </div>
  );
}
