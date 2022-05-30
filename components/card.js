import Image from "next/image";
import Link from "next/dist/client/link";
const Card = ({ card }) => {
  return (
    <div>
      <div className="card">
        <div className="card-container">
          <div className="img">
            <Image
              className="card-img"
              src={card.image}
              layout="responsive"
            ></Image>
          </div>
          <div className="content">
            <div className="title">
              <h2 className="title">{card.name}</h2>
            </div>
            <div className="description">
              <p>{card.description}</p>
            </div>

            <div className="apps-used">
              <p>{card.apps}</p>
            </div>
            <div className="links">
              <Link href={card.link}>
                <a className="btn">See live</a>
              </Link>
              <Link href={card.github}>
                <a className="btn">See code</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
