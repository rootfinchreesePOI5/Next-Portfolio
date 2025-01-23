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

export default function Home() {
  return (
    <AppProvider>
      <div>
        <Navbar />
        <div id='hero' className="py-[8rem] px-[8%] md:px-[6%] lg:px-[5%]">
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
