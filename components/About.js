import React from "react";
// import about data
import { aboutData } from "../data/aboutData";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import photo from "./img/about-photo.jpg";
import Image from "next/image";

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, subtitle3 } = aboutData;
  return (
    <div className="about-container">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="image-container">
          <Image src={photo} alt="photo" className="img-about" />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        
      >
        <div className="about-me-card">
          <div className="about-me-header">
            <h2 className="h2">{title}</h2>
          </div>

          <div className="about-me-p1">
            <p>{subtitle1}</p>
          </div>
          <div className="about-me-p2">
            <p>{subtitle2}</p>
          </div>
          <div className="about-me-p3">
            <p>{subtitle3}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
