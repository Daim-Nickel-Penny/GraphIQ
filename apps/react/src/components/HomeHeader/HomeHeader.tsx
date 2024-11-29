import Button from "../../ui/Button/Button";
import "./HomeHeader.css";

export default function HomeHeader() {
  return (
    <div className="home">
      <h1 className="home__title">
        The <span style={{ color: "var(--active-pink)" }}>graph</span> insights
        you want, effortlessly.
      </h1>
      <p className="home__description">
        Meet the tool to understand your graphs. Ask questions, get answers, and
        explore the world of graph analysis.
      </p>
      <div className="home__buttons">
        <Button
          text="Start Chatting"
          outlined={false}
          onClick={() => {
            window.location.href = "/chat";
          }}
        />
        <Button
          text="Guide"
          outlined={true}
          onClick={() => {
            window.open(
              "https://github.com/Daim-Nickel-Penny/GraphIQ/blob/main/INSTALLATION_GUIDE.md",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
}
