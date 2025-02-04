"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AppProvider } from "@/context/AppContext";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import './globals.css'
import { useState } from "react";

export default function Home() {
      const [menu, setMenu] = useState(false);
  return (
    <AppProvider>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
        <div id='hero' style={menu === true ? {display:'none'} : {display:"flex"}}  className="flex-col py-[5rem] md:py-[8rem] px-[8%] md:px-[6%] lg:px-[5%] gap-[5rem]">
          <Hero />
          <About/>
          <Projects/>
          <Testimonials/>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </AppProvider>
  );
}
