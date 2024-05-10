import { Link, Socials } from "../components";
import { Navigation } from "./libs/components/components";
import logo from "~assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-[32px] w-full max-w-[1400px]">
      <Link href="">
        <img alt="logo" src={logo} />
      </Link>
      <div className="flex gap-[80px]">
        <Navigation />
        <Socials />
      </div>
    </header>
  );
};

export { Header };
