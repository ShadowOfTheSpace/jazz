import Logo from "~assets/images/logo.svg?react";
import {
  Button,
  Link,
  Navigation,
  Socials,
} from "~/libs/components/components";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center mt-[150px] w-full">
      <div className="flex flex-col w-full max-w-[1400px]">
        <div className="flex justify-between p-[32px] w-full">
          <div className="flex flex-col gap-[40px]">
            <Link href="" className="shrink-0">
                <Logo className="w-[136px] h-[108px]" />
            </Link>
            <Socials
              className="gap-[17px]"
              iconClassName="size-[22px] text-jz-gold has-hover:hover:text-jz-white no-hover:active:text-jz-white"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold font-karantina text-[32px] -tracking-tighter">
              Navigation
            </h3>
            <Navigation
              className="lg:flex-col gap-[4px]"
              itemClassName="font-kameron text-jz-light-gray"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-bold font-karantina text-[32px] -tracking-tighter">
              Hours of work
            </h3>
            <p className="text-jz-light-gray">7AM - 5 PM⠀Mon - Sat</p>
            <p className="text-jz-light-gray">We are waiting for your call</p>
            <Button
              className="max-w-max text-[10px] xl:text-[16px]"
              iconName="phone"
              label="Call us"
              title="Call us"
            />
          </div>
        </div>
      </div>
      <span className="bg-jz-gold w-full h-[1px]"></span>
      <p className="py-[10px] font-bold text-[14px] text-jz-gold">
        ♪ the heart is jazz ♪
      </p>
    </footer>
  );
};

export { Footer };
