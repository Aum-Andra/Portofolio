import intervision from "../components/img/intervisionPhoto.png";
import ytClone from "../components/img/ytPhoto.png";
import blackSwan from "../components/img/blackSwan.png";
import realEstate from "../components/img/realEstatePhoto.png";
import AuthRN from "../components/img/ReactNativeAuth.jpg";
import Card from "../components/card";
import Image from "next/image";
import heroEntry from "../components/img/hero-entry.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  const Data = [
    {
      name: "Black Swan E-commerce",
      image: blackSwan,
      description: "",
      link: "https://black-swan-shop.vercel.app/",
      github: "https://github.com/Aum-Andra/BlackSwanShopNextJs",
      tags: ["Next.js", "Swiper.js"],
      id: 1,
    },
    {
      name: "Intervision",
      image: intervision,
      description: "",
      link: "https://imaginative-starship-c40b78.netlify.app/",
      github: "https://github.com/Aum-Andra/intervision_angular",
      tags: ["Angular", "TMDB API", "BOOTSTRAP"],
      id: 2,
    },
    {
      name: "Youtube Clone",
      image: ytClone,
      description: "",
      link: "https://stellar-cascaron-a188e2.netlify.app",
      github: "https://github.com/Aum-Andra/youtube_clone_react",
      tags: ["React", "RapidAPI", "Material UI"],
      id: 3,
    },

    {
      name: "Resplendency",
      image: realEstate,
      description: "",
      link: "https://resplendency-real-estate.vercel.app/",
      github: "https://github.com/Aum-Andra/real_estate",
      tags: ["NEXT.JS", "Chackra UI", "RapidAPI"],
      id: 4,
    },
    {
      name: "React Native Auth",
      image: AuthRN,
      description:
        "A simple login interface for the mobile using react native and the firebase api.",
      link: "",
      github: "https://github.com/Aum-Andra/react-native-auth",
      tags: ["React Native", "Firebase"],
      id: 5,
    },
  ];

  return (
    <section id="main">
      <section id="herobox">
        <Image src={heroEntry} width="800px" height="400" alt="photo"></Image>
        <div className="apps">
          <Link href="https://github.com/Aum-Andra">
            <a>
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </Link>
          <Link href="https://be.linkedin.com/in/aum-andra-golumbeanu-311240236">
            <a>
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </Link>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>

        <div className="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              strokeWidth="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>
      {/* about */}
      <section id="about">
        {/* <div className="heading">
          <h1>About Me</h1>
        </div> */}
        <About />
      </section>
      <section id="projects">
        <h1>My Projects</h1>
        <div className="projects-container">
          <div className="cards">
            {Data.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      {/* contact */}
      <section id="contact">
        <h1 style={{ fontSize: "2.4rem", marginTop: "3rem" }}>
          Send me an e-mail if you have any questions
        </h1>
        <div className="form">
          <form
            action="https://formsubmit.co/andra.aum@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your e-mail"
            />
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              required
              placeholder="Write your message here"
            ></textarea>
            <button className="btn">Send</button>
          </form>
        </div>
      </section>
    </section>
  );
}
