import "./MainSection.css";
import MainSectionCard from "../MainSectionCard/MainSectionCard";

export default function MainSection() {
  return (
    <div className="main-section">
      <h2 className="main-section__title h2">Built for modern researchers</h2>

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
