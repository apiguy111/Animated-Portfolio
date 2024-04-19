"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforming Vision into Seamless Experiences.{" "}
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            I'm a web security enthusiast and passionate programmer, constantly
            tinkering with code and unraveling cybersecurity puzzles. With a
            knack for dissecting and fortifying digital systems, I spend my
            spare moments building and breaking down software, driven by a
            relentless curiosity for technology's inner workings.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              href="/portfolio"
            >
              View My Work
            </Link>
            <Link className="p-4 rounded-lg ring-1 ring-black" href="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
