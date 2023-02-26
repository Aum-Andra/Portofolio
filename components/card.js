import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const Card = ({ card }) => {
  return (
    <motion.div
      variants={fadeIn("down")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="card">
        <div className="prj-image">
          <Image src={card.image} alt="project-image" className="img"></Image>
        </div>

        <div className="content">
          <div className="details">
            <h2>
              {card.name} <br />
              <span className="tags-container">
                {card.tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </span>
            </h2>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-live">
            <Link href={card.link} passHref>
              Live
            </Link>
          </button>
          <button className="btn-github">
            <Link href={card.github} passHref>
              Github
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
