"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { motion } from "motion/react"

export default function Home() {
  const text1 = "HONORING THE PAST".split(" ");

  return (
    <section className="hero">
      <video src="https://fhhsaa.nyc3.cdn.digitaloceanspaces.com/Awards-Ceremony.mp4" autoPlay muted loop className="hero-video" />
      <div className="content p-10">
        {text1.map((el: any, i: number) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.70,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
        <br />
        <div className="hero-btn">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button className="hero-action-btn" size="lg">Get Involved</Button>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
