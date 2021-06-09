import Head from "next/head";
import Features from "../components/features";
import About from "../components/about";
import Services from "../components/services";
import Gallery from "../components/gallery";
import Counter from "../components/counters";
import Team from "../components/team";
import Tesmonie from "../components/tesmonial";
import Brand from "../components/brand";
import Contact from "../components/contacts";
export default function Home() {
  return (
    <>
    <Features />
     <About />
     <Services />
     <Gallery />
     <Counter />
     <Team />
     <Tesmonie />
     <Brand />
     <Contact />
    </>
  );
}
