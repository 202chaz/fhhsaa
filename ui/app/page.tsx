"use client";

import { Button } from "@nextui-org/button";
import { motion } from "motion/react";

export default function Home() {
  const text1 = "HONORING THE PAST".split(" ");

  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        className="hero-video"
        src="https://fhhsaa.nyc3.cdn.digitaloceanspaces.com/Awards-Ceremony.mp4"
      />
      <div className="content p-10">
        {text1.map((el: any, i: number) => (
          <motion.span
            key={i}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: i / 10,
            }}
          >
            {el}{" "}
          </motion.span>
        ))}
        <br />
        <div className="hero-btn">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
          >
            <Button className="hero-action-btn" size="lg">
              Get Involved
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
