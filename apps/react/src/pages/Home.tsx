import HomeHeader from "../components/HomeHeader/HomeHeader";
import MainSection from "../components/MainSection/MainSection";
import TextHighlight from "../components/TextHighlight/TextHighlight";
import "../App.css";
import Swiper from "../components/Swiper/Swiper";
import OSS from "../components/OSS/OSS";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "100px",
      }}
    >
      <div className="home__wrapper">
        <HomeHeader />
        <MainSection />
      </div>

      <Swiper />

      <OSS />

      <TextHighlight
        text={
          <>
            Put the complex parts of running a research on autopilot.{" "}
            <span style={{ color: "var(--active-green)", opacity: 1 }}>
              GraphIQ
            </span>{" "}
            helps you to streamline your graph research, reduce manual work and
            easily package everything up for your future research.
          </>
        }
      />

      <Footer />
    </div>
  );
}
