import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "animate.css";
// import pdf from '../public/file/cvfrontendalejandro.pdf'l
const NavBar = () => {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []); // When the user scrolls the page, execute myFunction

  return (
    <div className="header">
      <div className="title">
        <div className="title-luis">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 3 }}
            transition={{ duration: 3 }}
            className="caja"
          >
            <span>ALEJANDRO RAMIREZ</span>
          </motion.div>
        </div>
      </div>
      <div id="navbar" className="menu">
        <div className="navbar">
          <ul>
            <a href="#home" className="li">
              HOME
            </a>
          </ul>
          <ul>
            <a href="#portafolio" className="li">
              PORTAFOLIO
            </a>
          </ul>
          <ul>
            <a href="#skills" className="li">
              SKILLS
            </a>
          </ul>
          <ul>
            <a href="#contact" className="li">
              CONTACT
            </a>
          </ul>
        </div>

        <div className="cvbox">
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate:[0,5,-5,0],
              transition: { duration: 0.52 },
            }}
            whileTap={{ scale: 0.9 }}
            className="cv"
          >
            <a href="http://localhost:2000/pdf">DOWNLOAD CV</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
