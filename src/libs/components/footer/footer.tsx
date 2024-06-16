import Logo from "~assets/images/logo.svg?react";
import { Link, Navigation, Socials } from "~components/components";
import { AppRoute } from "~enums/enums";
import { ContactModal, DonationPlatforms } from "./libs/components/components";

const Footer: React.FC = () => {
  return (
    <footer
      id="contacts"
      className="flex flex-col items-center bg-jz-gray mt-[32px] w-full"
    >
      <div className="flex justify-center mb-[16px] sm:mb-[32px] border-b border-b-jz-gold w-full">
        <div className="flex md:flex-row flex-col justify-between gap-[32px] p-[16px] sm:p-[32px] w-full max-w-[1400px]">
          <div className="flex justify-between gap-x-[32px] md:contents">
            <div className="flex flex-col gap-y-[10px] md:order-2">
              <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
                Navigation
              </h3>
              <Navigation
                className="lg:flex-col gap-y-[5px] lg:gap-y-[10px]"
                displayVariant="grid"
                itemClassName="text-[16px] lg:text-[20px] font-kameron text-jz-light-gray"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] md:order-3">
              <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
                Support Pavel on
              </h3>
              <DonationPlatforms />
            </div>
          </div>
          <div className="sm:flex sm:flex-row-reverse sm:justify-between contents md:contents">
            <div className="flex flex-col gap-y-[10px] md:order-4 w-max sm:w-[157px] md:w-max">
              <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
                Contact with us
              </h3>
              <div className="flex sm:contents items-center gap-x-[32px]">
                <p className="text-[16px] text-jz-light-gray lg:text-[20px]">
                  You can say HI here!
                </p>
                <Link
                  className="border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent px-[15px] sm:px-[32px] py-[5px] sm:py-[10px] rounded-[40px] font-bold font-inter text-[14px] text-center text-jz-main lg:text-[16px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors shrink-0"
                  href={AppRoute.CONTACT}
                >
                  Contact
                </Link>
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
      <ContactModal />
    </footer>
  );
};

export { Footer };
