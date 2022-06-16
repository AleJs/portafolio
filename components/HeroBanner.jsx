import React from "react";
import {motion} from 'framer-motion'
const HeroBanner = () => {
  return (
        <div className="hero">
    <div  id="home" className="herobox">
        <div className="dev">
       
      <motion.div
       initial={{ scale: 1 }}
       
       animate= {{
        x: [-1000, 0],
       }}    
        transition={{ duration:1.5}}
       
      className="devbox">
            <div className="devtitle">
              <div className="delop">
                <h1>
                  Hi,
                  <br />
                  I'm a developer.
                </h1>
              </div>
              <div className="desc">
                <p>
                  I design and code beautifully simple things, and I love what I
                  do.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="photobox">
            <img src="" alt="" />
            <h1>foto</h1>
          </div>
        </div>
        <div className="  animation">
          <h1 className="marquee">
            JAVASCRIPT <b/> • <b/>REACTJS <b/> • <b/>NODEJS <b/> • <b/>CSS <b/> • <b/>SASS<b/> • <b/> TAILWIND <b/> • <b/>SQL<b/> • <b/>MONGODB<b/> • <b/> MYSQL 
          </h1>
        
         
        
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
