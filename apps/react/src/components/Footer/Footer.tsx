import Icon from "../Icon/Icon";
import "./Footer.css";

interface FooterProps {
  list: {
    title: string;
    links: Array<{
      title: string;
      link: string;
    }>;
  };
}

const footerData: FooterProps[] = [
  {
    list: {
      title: "Documentation",
      links: [
        {
          title: "Getting Started",
          link: "",
        },
        {
          title: "Pricing",
          link: "",
        },
        {
          title: "FAQ",
          link: "",
        },
      ],
    },
  },
  {
    list: {
      title: "Company",
      links: [
        {
          title: "GitHub",
          link: "",
        },
        {
          title: "Liscense",
          link: "",
        },
        {
          title: "Privacy Policy",
          link: "",
        },
        {
          title: "Terms of Service",
          link: "",
        },
      ],
    },
  },
  {
    list: {
      title: "Resources",
      links: [
        {
          title: "Blog",
          link: "",
        },
        {
          title: "Public Roadmap",
          link: "",
        },
      ],
    },
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer">
        {footerData.map((section, index) => (
          <div className="footer__list" key={index}>
            <h4 className="footer__list-title h3" style={{ textAlign: "left" }}>
              {section.list.title}
            </h4>
            {section.list.links.map((item, idx) => (
              <div className="footer__list-item" key={idx}>
                <div
                  className="footer__list-link p"
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                  style={{ textAlign: "left" }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* <div className="system__status">
        <div className="system-status__icon">
          <Icon name="Dot" color="var(--active-green)" size="50px" />
        </div>
        <p className="system__status-text p">All systems are normal</p>
      </div> */}
    </>
  );
};

export default Footer;
