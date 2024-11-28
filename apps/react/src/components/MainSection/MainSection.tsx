import "./MainSection.css";
import MainSectionCard from "../MainSectionCard/MainSectionCard";

export default function MainSection() {
  return (
    <div className="main-section">
      <h2 className="main-section__title h2">Built for modern researchers</h2>
      <p className="main-section__description p">
        Crafted with customization in mind. <br /> Designed to get the best
        insights.
      </p>
      <div className="main-section__cards">
        <MainSectionCard
          image="https://mintlify-assets.b-cdn.net/website/home/overview%20features/OOTB%20-%20Dark.png"
          title="Out of the box"
        />
        <MainSectionCard
          image="https://mintlify-assets.b-cdn.net/website/home/overview%20features/OOTB%20-%20Dark.png"
          title="Built for insights"
        />
        <MainSectionCard
          image="https://mintlify-assets.b-cdn.net/website/home/overview%20features/OOTB%20-%20Dark.png"
          title="Designed for conversion"
        />
      </div>
    </div>
  );
}
