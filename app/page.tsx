"use client";


import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import AlienOverlay from "@/components/AlienOverlay";


export default function Home() {
  

  
  

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Layout>
              
              <AlienOverlay />
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="certifications">
                <Certifications />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </Layout>
          </motion.div>
        
      </AnimatePresence>
    </main>
  );
}


//Version 10.4.0