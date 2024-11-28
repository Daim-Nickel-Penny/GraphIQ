import { SwiperCardProps } from "./Swiper";

const SwiperCard: React.FC<Partial<SwiperCardProps>> = ({ id, image }) => {
  return (
    <div className="swiper-card">
      <img
        key={id}
        src={image}
        alt="swiper-card__image"
        className="swiper-card__image"
      />
    </div>
  );
};

export default SwiperCard;
