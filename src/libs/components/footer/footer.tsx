import Logo from "~assets/images/logo.svg?react";
import {
  Button,
  Icon,
  Link,
  Navigation,
  Socials,
} from "~components/components";
import { AppRoute } from "~enums/enums";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center mt-[32px] w-full">
      <div className="flex justify-center bg-jz-gray border-b border-b-jz-gold w-full">
        <div className="flex md:flex-row flex-col justify-between gap-[32px] p-[16px] sm:p-[32px] w-full max-w-[1400px]">
          <div className="flex justify-between gap-x-[32px] md:contents">
            <div className="flex flex-col gap-y-[10px] md:order-2">
              <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
                Navigation
              </h3>
              <Navigation
                className="lg:flex-col gap-y-[5px] lg:gap-y-[10px]"
                itemClassName="text-[16px] lg:text-[20px] font-kameron text-jz-light-gray"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] md:order-3 sm:mr-[40px] md:mr-0">
              <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
                Support Pavel on
              </h3>
              <Link
                className="flex items-center gap-[10px] max-w-max text-[16px] text-jz-light-gray lg:text-[20px] hover:text-jz-gold transition-colors"
                href={AppRoute.ROOT}
                isOpenInNewPage
              >
                <Icon className="shrink-0" name="buyMeACoffee" />
                <p>Buy Me a Coffee</p>
              </Link>
              <Link
                className="flex items-center gap-[10px] max-w-max text-[16px] text-jz-light-gray lg:text-[20px] hover:text-jz-gold transition-colors"
                href={AppRoute.ROOT}
                isOpenInNewPage
              >
                <Icon className="shrink-0" name="patreon" />
                <p>Patreon</p>
              </Link>
            </div>
          </div>
          <div className="sm:flex sm:flex-row-reverse sm:justify-between contents md:contents">
            <div className="flex flex-col gap-y-[10px] md:order-4">
              <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
                Hours of work
              </h3>
              <div className="flex sm:contents items-end gap-x-[32px]">
                <div className="flex flex-col gap-y-[5px] lg:gap-y-[10px]">
                  <p className="text-[16px] text-jz-light-gray lg:text-[20px]">
                    7AM - 5 PM⠀Mon - Sat
                  </p>
                  <p className="text-[16px] text-jz-light-gray lg:text-[20px]">
                    We are waiting for your call
                  </p>
                </div>
                <Button
                  className="max-w-max text-[14px] sm:text-[14px] lg:text-[16px] shrink-0"
                  iconName="phone"
                  label="Call us"
                />
              </div>
            </div>
            <div className="flex sm:flex-col justify-between sm:justify-normal sm:gap-y-[40px] md:order-1">
              <Link href={AppRoute.ROOT} className="shrink-0">
                <Logo className="w-[75px] sm:w-[136px] h-[60px] sm:h-[108px]" />
              </Link>
              <Socials iconClassName="size-[22px] text-jz-gold has-hover:hover:text-jz-white no-hover:active:text-jz-white" />
            </div>
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
