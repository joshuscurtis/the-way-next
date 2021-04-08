import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Events from "../components/events";
import FloatingActionButton from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ArrowUpward";

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
      </Head>
      <FloatingActionButton style={style}>
        <AddIcon />
      </FloatingActionButton>
      <Hero />
      <About />
      <Events />
    </div>
  );
}
