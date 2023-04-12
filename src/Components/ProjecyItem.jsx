import React from "react";
import folder from "../assets/Icons/folder.svg";
import gitIcon from "../assets/Icons/git.png";
import openIcon from "../assets/Icons/openIcon.png";
import { useState } from "react";
export default function ProjecyItem(props) {
  return (
    <div>
      <div className="w-72 bg-customPurple h-auto clearfix m-4 ">
        <div className="p-4">
          <img src={folder} className="scale-150 text-yellow-500" />
          <h3 className="text-white font-semibold text-lg">{props.title}</h3>
          <p className="text-white mt-4">{props.deisc}</p>
        </div>
        <div
          className={`float-right justify-between px-4 py-1 flex-row flex items-center ${
            props.liteUp ? "bg-maineyellow" : "bg-yellow-200"
          } w-full`}
        >
          <div className="flex items-center">
            <a
              href={props.linkSource}
              className="mr-2 font-semibold hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>

            <img
              src={gitIcon}
              onClick={() => {
                window.open(`${props.linkSource}`, "_blank");
              }}
              className="w-8 hover:cursor-pointer "
            />
          </div>
          <div className="flex items-center">
            <a
              href={props.liveLink}
              className="mr-1 font-semibold hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <img
              src={openIcon}
              onClick={() => {
                window.open(`${props.liveLink}`, "_blank");
              }}
              className="w-8 hover:cursor-pointer mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
