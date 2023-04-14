import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero";
import { useRef, useEffect } from "react";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { NavigationRef } from "./Context/NavigationRef";
import Logo from "./assets/logo.png";
function App() {
  const [navH, setnavH] = useState(0);
  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // useEffect(() => {
  //   if (myRef.current) {
  //     setnavH(myRef.current.offsetHeight);
  //   }
  // }, []);
  return (
    <div className="bg-bgShade relative">
      <div className="max-w-screen-xl m-auto">
        <NavigationRef.Provider value={{ aboutRef, projectRef, contactRef }}>
          <nav
            ref={navRef}
            className="text-white flex mx-4 m-auto justify-between pt-4"
          >
            <div>
              {/* <a className={`font-semibold border-2 p-2`}>L</a> */}
              <img className="w-8" src={Logo} />
            </div>

            <ul className=" flex text-sm">
              <li
                className="cursor-pointer"
                onClick={() => {
                  aboutRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <a>About</a>
              </li>
              <li
                className="cursor-pointer mx-8"
                onClick={() => {
                  projectRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <a>Project's</a>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  contactRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <a>Contact</a>
              </li>
            </ul>
          </nav>
          <div>
            <Hero navHei={navH} />
            <About />
            <Projects />

            <Contact />
          </div>
        </NavigationRef.Provider>
      </div>
    </div>
  );
}

export default App;
