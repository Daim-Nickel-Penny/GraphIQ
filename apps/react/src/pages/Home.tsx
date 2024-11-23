import HomeHeader from "../components/HomeHeader/HomeHeader";
import Button from "../ui/Button/Button";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Button
        text="Get Started"
        outlined={false}
        onClick={() => {
          window.location.href = "/chat";
        }}
      />
    </div>
  );
}
