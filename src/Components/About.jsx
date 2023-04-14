import React, { useEffect, useState } from "react";
import electron from "../assets/Icons/electron1.png";
import js from "../assets/Icons/js.png";
import reactjs from "../assets/Icons/reactjs.png";
import firebaselogo from "../assets/Icons/firebaselogo.png";
import flutter from "../assets/Icons/flutter.png";
import ts from "../assets/Icons/ts.png";
import myIng from "../assets/new.jpg";
import newIm from "../assets/myph.jpg";
import { useContext } from "react";
import { NavigationRef } from "../Context/NavigationRef";
import useWindowDimensions from "./getWindowDimensions";
import { motion } from "framer-motion";
export default function About() {
  const { aboutRef } = useContext(NavigationRef);
  const { height, width } = useWindowDimensions();
  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };
  const hide = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={aboutRef}>
      <div className="md:w-full aboutbar:w-96 md:flex  m-auto justify-between sm:items-center grid grid-cols-1  ">
        <div className="md:w-1/2  text-center md:row-start-2 row-end-3 m-4">
          <h1 className="text-white text-center mb-8 font-semibold text-lg">
            About Me
          </h1>
          <p className="text-white">
            Hi there, I'm Lahiru, a software engineer with a passion for
            building amazing applications. I specialize in using two powerful
            frameworks - Flutter and React - to create rich, interactive user
            experiences that make a difference.
          </p>
          <p className="text-white my-4">
            Over the years, I've honed my skills in building mobile and web
            applications that are fast, reliable, and easy to use. Whether it's
            a simple utility app or a complex web platform, I enjoy the
            challenge of taking an idea from concept to reality and delivering a
            final product that exceeds expectations.
          </p>
          <p className="text-white">
            If you're looking for a dedicated software engineer who can bring
            your mobile or web application to life, I'm here to help. Let's
            connect and see how we can work together to build something truly
            amazing.
          </p>
          <h3 className="text-white font-bold text-lg mt-16 ">My Skills</h3>
          <div className="my-8 flex aboutbar:flex-row aboutbar:w-full flex-col m-auto w-24  items-center justify-center text-black bg-slate-300 text-center gap-4 p-4">
            <div>
              <img src={js} />
              <h3>Java Script</h3>
            </div>
            <div className="">
              <img src={ts} />
              <h3>Type Sctipt</h3>
            </div>
            <div className="">
              <img src={reactjs} />
              <h3>React</h3>
            </div>
            <div className="">
              <img src={electron} />
              <h3>Electron</h3>
            </div>
            <div className="">
              <img src={flutter} />
              <h3>flutter</h3>
            </div>

            <div className="">
              <img src={firebaselogo} />
              <h3>Firebase</h3>
            </div>
          </div>
        </div>

        <div className="relative m-4">
          <div className=" absolute z-50 -left-10">
            <svg
              width="11"
              height="305"
              viewBox="0 0 11 399"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.line
                x1="5.5"
                y1="2.40413e-07"
                x2="5.49998"
                y2="399"
                stroke="#EBDC05"
                strokeWidth="11"
                variants={scrollPosition > 300 ? draw : hide}
                initial="hidden"
                animate="visible"
                transition={{
                  pathLength: { duration: 1, ease: "linear" },
                  opacity: { duration: 1 },
                }}
              />
            </svg>
          </div>
          <div className="relative">
            <img
              className="xsm:max-w-xs m-auto relative z-20 border-8 border-white"
              src={newIm}
            />

            <div className="absolute right-0  w-full h-full z-10 -top-4 -left-4 bg-customPurple"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
