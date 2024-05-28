import Logo from "~assets/images/logo.svg?react";
import {
  Button,
  Icon,
  Link,
  Navigation,
  Socials,
} from "~/libs/components/components";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center mt-[32px] w-full">
      <div className="flex justify-center bg-jz-gray border-b border-b-jz-gold w-full">
        <div className="flex justify-between gap-[32px] p-[32px] w-full max-w-[1400px]">
          <div className="flex flex-col gap-[40px]">
            <Link href="" className="shrink-0">
              <Logo className="w-[136px] h-[108px]" />
            </Link>
            <Socials iconClassName="size-[22px] text-jz-gold has-hover:hover:text-jz-white no-hover:active:text-jz-white" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold font-karantina text-[32px] tracking-[0.05em]">
              Navigation
            </h3>
            <Navigation
              className="lg:flex-col gap-[4px]"
              itemClassName="font-kameron text-jz-light-gray"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold font-karantina text-[32px] tracking-[0.05em]">
              Support Pavel on
            </h3>
            <Link
              className="flex items-center gap-[10px] max-w-max text-jz-light-gray hover:text-jz-gold"
              href=""
            >
              <Icon name="buyMeACoffee" />
              <p>Buy Me a Coffee</p>
            </Link>
            <Link
              className="flex items-center gap-[10px] max-w-max text-jz-light-gray hover:text-jz-gold"
              href=""
            >
              <Icon name="patreon" />
              <p>Patreon</p>
            </Link>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold font-karantina text-[32px] tracking-[0.05em]">
              Hours of work
            </h3>
            <p className="text-jz-light-gray">7AM - 5 PM⠀Mon - Sat</p>
            <p className="text-jz-light-gray">We are waiting for your call</p>
            <Button
              className="max-w-max text-[10px] xl:text-[16px]"
              iconName="phone"
              label="Call us"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-jz-gray w-full">
        <p className="py-[10px] font-bold text-[14px] text-jz-gold">
          ♪ the heart is jazz ♪
        </p>
      </div>
    </footer>
  );
};

export { Footer };
