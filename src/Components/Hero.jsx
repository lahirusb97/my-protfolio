import React from "react";
import logo from "../assets/logoframe.svg";
import Lottie from "react-lottie";
import heroani from "../assets/heroani.json";
import useWindowDimensions from "./getWindowDimensions";
export default function Hero(props) {
  const { height, width } = useWindowDimensions();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroani,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{ width: `${width - props.navHei}` }}
      className="grid grid-cols-1 grid-rows-2 sm:flex h-screen sm:items-center sm:justify-between mx-4 relative z-50"
    >
      <div className="text-white 2xl:w-1/2 col-start-2 row-start-2 text-center sm:text-start m-auto">
        <h3 className="text-maineyellow">Hi, my name is </h3>
        <h2 className="md:text-2xl sm:text-2xl font-semibold">Lahiru Shiran</h2>
        <h1 className="lg:text-6xl sm:text-4xl font-semibold my-2">
          i build Desktop, web & mobile applications
        </h1>
        <p className="my-2">
          As a skilled software engineer, I specialize in crafting exceptional
          web and mobile applications. i’m focused on providing digital solution
          to improve business and giving the opportunity to con nect with the
          world using latest technology.
        </p>
        <button className="p-4 bg-maineyellow text-black font-semibold">
          Get In Touch
        </button>
      </div>
      <div className="self-end sm:self-center md:mt-0 ml-8">
        <Lottie
          options={defaultOptions}
          height={
            width < 640 && width > 500
              ? width - 150
              : width < 640
              ? width - 90
              : width > 1500
              ? 600
              : width / 3
          }
          width={
            width < 640 && width > 500
              ? width - 150
              : width < 640
              ? width - 90
              : width > 1500
              ? 600
              : width / 3
          }
        />
      </div>
    </div>
  );
}
