import Head from 'next/head'
import Hero from '../components/hero'
import About from '../components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Way Coffee House | Coffee & Cake in Dunstable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <About/>
</div>
  )
}
