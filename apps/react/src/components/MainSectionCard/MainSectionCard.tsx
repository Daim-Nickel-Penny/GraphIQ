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
      <h2 className="main-section-card__title">{props.title}</h2>
    </div>
  );
}
