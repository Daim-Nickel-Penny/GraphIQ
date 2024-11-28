import React, { useEffect, useState } from "react";
import "./Swiper.css";
import SwiperCard from "./SwiperCard";

export interface SwiperCardProps {
  id: number;
  title: string;
  image: string;
}

const swiperCards: SwiperCardProps[] = [
  {
    id: 1,
    title: "Ask any question",
    image:
      "https://mintlify-assets.b-cdn.net/website/home/themes-mockup/venus-new-dark.png",
  },
  {
    id: 2,
    title: "Better understanding",
    image:
      "https://mintlify-assets.b-cdn.net/website/home/themes-mockup/quill-new-dark.png",
  },
  {
    id: 3,
    title: "Get answers",
    image:
      "https://mintlify-assets.b-cdn.net/website/home/themes-mockup/prism-new-dark.png",
  },
];

const Swiper: React.FC = () => {
  const [currentSwiperCard, setCurrentSwiperCard] = useState<SwiperCardProps>(
    swiperCards[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSwiperCard((prevCard) => {
        const currentIndex = swiperCards.findIndex(
          (card) => card.id === prevCard.id
        );
        const nextIndex = (currentIndex + 1) % swiperCards.length;
        return swiperCards[nextIndex];
      });
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="swiper">
      <h2 className="swiper__title h2" style={{ textAlign: "left" }}>
        Tool that gives you real-time insights
      </h2>
      <p className="swiper__description p" style={{ textAlign: "left" }}>
        A platform you can trust to get the best insights from your graphs.
      </p>
      <div className="swiper__cards">
        <div className="swiperCard__wrapper-pagination">
          {swiperCards.map((swiperCard, index) => (
            <div
              className="swiper__card-wrapper"
              key={index}
              style={{
                opacity: currentSwiperCard.id === swiperCard.id ? "1" : "0.7",
              }}
            >
              <div
                className={`left-bar-div ${
                  currentSwiperCard.id === swiperCard.id ? "active" : ""
                }`}
              />
              <div className="swiperCard__pagination p">{swiperCard.title}</div>
            </div>
          ))}
        </div>
        <SwiperCard id={currentSwiperCard.id} image={currentSwiperCard.image} />
      </div>
    </div>
  );
};

export default Swiper;
