import InterV from "../components/img/InterVision.png";
import Quiz from "../components/img/TriviaQuiz.png";
import Imperial from "../components/img/Imperial.png";
import SocialMedia from "../components/img/SocialMedia.png";
import AuthRN from "../components/img/ReactNativeAuth.jpg";
import Card from "../components/card";
import profile from "../components/img/profil.png";
import Image from "next/image";
import MementoCode from "../components/img/MementoCode.png";
import heroEntry from "../components/img/hero-entry.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Home() {
  const [aboutPart, setAboutPart] = useState(0);

  const Data = [
    {
      name: "React Native Auth",
      image: AuthRN,
      description:
        "A simple login interface for the mobile using react native and the firebase api.",
      link: "",
      github: "https://github.com/Aum-Andra/react-native-auth",
      apps: ["React Native  Firebase"],
      id: 1,
    },
    {
      name: "MementoCode Small Social Media",
      image: SocialMedia,
      description:
        "A small social media application that uses angular for the frontend and firebase/firestore as backend.The users can create accounts, login, reset the password, make new posts and add comments to thise posts.",
      link: "https://papaya-unicorn-cb8afd.netlify.app/",
      github: "https://github.com/Aum-Andra/MementoCodeSocialMedia",
      apps: ["Angular   Firebase"],
      id: 2,
    },
    {
      name: "InterVision",
      image: InterV,
      description:
        "A movie finder application using React hooks and the API from TMDB.The application shows the most popular movies of the respective day,the option to see movies from the next page and can be used to search for any movie or series on the TMDB database by changing the state of the homepage to whatever is searched for.",
      link: "https://lambent-valkyrie-e0dffb.netlify.app/",
      github: "https://github.com/Aum-Andra/Inter-Vision",
      apps: ["HTML CSS  API REACT"],
      id: 3,
    },
    {
      name: "Imperial Store",
      image: Imperial,
      description:
        "A small perfume e-commerce website using HTML,CSS and React.In this project I got more comfortable with the map higher function and using the useState Hook to change the positions of items in arrays.",
      link: "https://shimmering-torrone-2c4d38.netlify.app/",
      github: "https://github.com/Aum-Andra/Imperial-Store",
      apps: ["HTML CSS REACT"],
      id: 4,
    },

    {
      name: "MementoCode",
      image: MementoCode,
      description:
        "A small blog website using the Contentful CMS for the database and Next.js for client server side rendering.",
      link: "https://memento-code-lk2986suu-aum-andra.vercel.app/",
      github: "https://github.com/Aum-Andra/MementoCode",
      apps: ["HTML CSS NEXT.JS CONTENTFUL"],
      id: 5,
    },
    {
      name: "Trivia Quiz",
      image: Quiz,
      description: "A little trivia quiz using React",
      link: "https://sunny-medovik-493c81.netlify.app/",
      github: "https://github.com/Aum-Andra/Trivia-Qiuz",
      apps: ["HTML CSS REACT"],
      id: 6,
    },
  ];
  const info = [
    {
      title: "Technologies",
      id: 1,
      body: "I am a detail-oriented Front End Developer with experience using Javascript, ReactJS, Angular and React Native.",
    },
    {
      title: "Presentation",
      id: 2,
      body: "Hardworking and passionate job seeker with strong organizational skills, eager to secure a front end job position. Ready to help the team achieve the company's goals. I'm an adept at independent projects who could also fit in any team, with an emphasis on website design & development.",
    },
    {
      title: "Personal Info",
      id: 3,
      body: "My name is Aum Andra Maria Elena Golumbeanu. I'm 23 years old and I have a bachelor degree in computer science.I love reading books, fashion and bringing complex and beautiful user interfaces to the users screens.",
    },
  ];

  return (
    <section id="main">
      <section id="herobox">
        <Image src={heroEntry} width="800px" height="400"></Image>
        <div className="apps">
          <Link href="https://github.com/Aum-Andra">
            <a>
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/aum-golumbeanu-311240236/">
            <a>
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </Link>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
      </section>
      <section id="about">
        <div className="triangle-bk">
          <div className="about">
            <div className="intro">
              <div className="headings">
                <h1 className="name">Hello,I am Andra</h1>
              </div>

              <div className="para">
                <div className="buttons">
                  <button className="about-btn" onClick={() => setAboutPart(0)}>
                    Technologies
                  </button>
                  <button className="about-btn" onClick={() => setAboutPart(1)}>
                    About me
                  </button>
                  <button className="about-btn" onClick={() => setAboutPart(2)}>
                    Personal Info
                  </button>
                </div>

                <div className="about-card">
                  <div className="about-body-card">
                    <p>{info[aboutPart].body}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <Image className="profile-img" src={profile}></Image>
            </div>
          </div>
        </div>
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
        <h1>Send me an e-mail if you have any questions</h1>
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
      <footer>
        <p>Copyright &copy; 2022 Golumbeanu Aum Andra</p>
      </footer>
    </section>
  );
}
