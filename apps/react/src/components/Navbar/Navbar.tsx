import Icon from "../Icon/Icon";
import "./Navbar.css";

export default function Navbar() {
  const NavData: Array<{ name: string; icon: any; path: string }> = [
    {
      name: "Home",
      icon: "House",
      path: "/",
    },
    {
      name: "Chat",
      icon: "MessageCircle",
      path: "/chat",
    },
  ];

  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="https://lucide.dev/logo.dark.svg"
        alt="logo"
      />

      <div className="navbar__links">
        {NavData.map((navItem) => (
          <a key={navItem.name} href={navItem.path} className="navbar__link">
            <Icon name={navItem.icon} color="white" size="20px" />
          </a>
        ))}
      </div>
    </div>
  );
}
