import HomeHeader from "../components/HomeHeader/HomeHeader";
import MainSection from "../components/MainSection/MainSection";
import TextHighlight from "../components/TextHighlight/TextHighlight";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <MainSection />
      <TextHighlight
        text="Put the complex parts of running a research on autopilot. GraphIQ helps you 
              to streamline your graph research, reduce manual work 
              and easily package everything up for your future research."
      />
    </div>
  );
}
