import "./OSS.css";

import Button from "../../ui/Button/Button";

const OSS = () => {
  return (
    <div className="oss">
      <h2 className="oss__title h2">Open source at heart</h2>
      <p
        className="oss__description p"
        style={{
          marginTop: "-20px",
        }}
      >
        <span style={{ opacity: 1 }}>GraphIQ</span> is built in mind to help
        researchers. We believe that the best
        <br />
        research is the research that is done with the best tools. That's why{" "}
        <br />
        we have open sourced GraphIQ. You can use it for free,
        <br /> and we're always looking for ways to improve it.
      </p>

      <Button
        text="Contribute"
        outlined={false}
        onClick={() => {
          window.open("https://github.com/Daim-Nickel-Penny/GraphIQ", "_blank");
        }}
        style={{
          marginBottom: "40px",
        }}
      />
    </div>
  );
};

export default OSS;
