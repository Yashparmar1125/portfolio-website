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
import ScrollAnimation from "@/components/ScrollAnimation";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  useEffect(() => {
    const logVisit = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        let geoData;

        // Primary: IP2Location API
        try {
          const ip2Res = await fetch(`https://api.2ip.io/${ip}?token=${process.env.NEXT_PUBLIC_2IP_TOKEN}`);
          if (!ip2Res.ok) throw new Error("IP2Location failed");
          geoData = await ip2Res.json();
        } catch {
          // Fallback: ipwho.is
          const fallbackRes = await fetch(`https://ipwho.is/${ip}`);
          geoData = await fallbackRes.json();
        }
        const userAgent = navigator.userAgent;

        await supabase.from("requests_logs").insert([
          {
            ip,
            route: "/",
            timestamp: new Date().toISOString(),
            country: geoData.country,
            region: geoData.region,
            city: geoData.city,
            latitude: geoData.lat,
            longitude: geoData.lon,
            user_agent: userAgent,
            asn_name: geoData.asn?.name || null,
          },
        ]);
      } catch (err) {
        console.error("Log insert failed:", err);
      }
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
            <ScrollAnimation direction="up" delay={0.1}>
              <section id="about">
                <About />
              </section>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <section id="skills">
                <Skills />
              </section>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <section id="certifications">
                <Certifications />
              </section>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <section id="projects">
                <Projects />
              </section>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.5}>
              <section id="contact">
                <Contact />
              </section>
            </ScrollAnimation>
          </Layout>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
