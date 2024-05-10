import { Icon, Link } from "../components";

const Socials: React.FC = () => {
  return (
    <div className="flex gap-[24px]">
      <Link
        href="https://www.instagram.com/pavelarakelian"
        className="hover:text-jz-gold"
        isOpenInNewPage
      >
        <Icon name="instagram" />
      </Link>
      <Link
        href="https://facebook.com/pavel.arakelian"
        className="hover:text-jz-gold"
        isOpenInNewPage
      >
        <Icon name="facebook" />
      </Link>
      <Link
        href="https://www.youtube.com/@pavelarakelian"
        className="hover:text-jz-gold"
        isOpenInNewPage
      >
        <Icon name="youtube" />
      </Link>
    </div>
  );
};

export { Socials };
