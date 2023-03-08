import Head from 'next/head'
import Navbar from "../../components/Navbar"
import Hero from '../../components/Hero'
import About from '../../components/About'
import WhatIDo from '../../components/WhatIDo'
import Skills from '../../components/Skills'
import Education from '../../components/Education'
import Footer from '../../components/Footer'
import Work from '../../components/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lakshya | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <WhatIDo />
        <Work/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
