import "./MainSectionCard.css";

interface MainSectionCardProps {
  image: string;
  title: string;
}
export default function MainSectionCard(props: MainSectionCardProps) {
  return (
    <div className="main-section-card">
      <img
        src={props.image}
        alt="main-section-card__image"
        className="main-section-card__image"
      />
      <h3 className="main-section-card__title h3">{props.title}</h3>
    </div>
  );
}
