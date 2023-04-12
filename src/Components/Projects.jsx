import React, { useState } from "react";
import folder from "../assets/Icons/folder.svg";
import gitIcon from "../assets/Icons/git.png";
import openIcon from "../assets/Icons/openIcon.png";
import ProjecyItem from "./ProjecyItem";
import { useContext } from "react";
import { NavigationRef } from "../Context/NavigationRef";
export default function Projects() {
  const [itemIndex, setItemIndex] = useState(null);
  const { projectRef } = useContext(NavigationRef);

  const project = [
    {
      id: 0,
      title: "Stock Management & Billing system",
      disc: "shop owners can manage stocks items and add ,print bills calculate monthly income",
      linkSource:
        "https://github.com/lahirusb97/simple-stock-management-billing-system-.git",
      liveLink: "https://mysamples-cbad4.web.app/",
    },
    {
      id: 1,
      title: "Stock Management & Billing system",
      disc: "shop owners can manage stocks items and add ,print bills calculate monthly income",
      linkSource:
        "https://github.com/lahirusb97/simple-stock-management-billing-system-.git",
      liveLink: "https://mysamples-cbad4.web.app/",
    },
    {
      id: 2,
      title: "Stock Management & Billing system",
      disc: "shop owners can manage stocks items and add ,print bills calculate monthly income",
      linkSource:
        "https://github.com/lahirusb97/simple-stock-management-billing-system-.git",
      liveLink: "https://mysamples-cbad4.web.app/",
    },
  ];

  return (
    <div className="my-10">
      {" "}
      <h1
        ref={projectRef}
        className="mb-8 text-white font-semibold text-lg text-center"
      >
        My Project
      </h1>
      <div className="flex flex-wrap justify-center">
        {project.map((e, index) => (
          <div
            key={e.id}
            onMouseOver={() => {
              setItemIndex(index);
            }}
            onMouseLeave={() => {
              setItemIndex(null);
            }}
          >
            <ProjecyItem
              liteUp={itemIndex === index ? true : false}
              title={e.title}
              deisc={e.disc}
              linkSource={e.linkSource}
              liveLink={e.liveLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
