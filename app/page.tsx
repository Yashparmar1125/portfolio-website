"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import AlienOverlay from "@/components/AlienOverlay";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  useEffect(() => {
    const logVisit = async () => {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipRes.json();

      await supabase.from("requests_logs").insert([
        {
          ip,
          route: "/",
          timestamp: new Date().toISOString(),
        },
      ]);
    };

    logVisit();
  }, []);

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
