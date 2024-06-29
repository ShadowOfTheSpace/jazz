import { useCallback, useRef, useState } from "react";
import heroAudio from "~assets/audio/pavel-audio.mp3";
import heroImage from "~assets/images/hero-image.png";
import { Animated, Button, Link } from "~components/components";
import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import pdf from "/files/Pavel_Arakelian_press_portrait.pdf";

const HeroSection: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioToggle = useCallback(() => {
    if (isAudioPlay) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsAudioPlay((isAudioPlayPrev) => {
      return !isAudioPlayPrev;
    });
  }, [audioRef, isAudioPlay]);

  return (
    <section className="flex flex-col gap-y-[16px] sm:gap-y-[36px] xl:mt-[80px] w-full max-w-[1400px] self-center">
      <div className="relative flex xl:flex-row flex-col gap-[8px] sm:gap-[24px] bg-[url('/src/assets/images/notes-hero-background.svg')] px-[16px] sm:px-[32px]">
        <div className="xl:flex flex-col gap-y-[36px] p-[8px] xl:basis-[688px] basis-[600px] contents shrink-0">
          <Animated.Title
            className={cn(
              "order-2 text-[32px] leading-tight",
              appLanguage === "eng" &&
                "font-karantina sm:text-[70px] xl:text-[80px] tracking-[0.05em]",
              appLanguage === "ukr" &&
                "font-oswald sm:text-[60px] xl:text-[75px]",
              appLanguage === "blr" &&
                "font-oswald sm:text-[60px] xl:text-[75px]"
            )}
            duration={0.7}
          >
            {translate("Thinking Jazz")} –{" "}
            <Animated.HighlightedText className="text-jz-gold" delay={0.6}>
              {translate("Meaning")}
            </Animated.HighlightedText>
            <br />
            <Animated.HighlightedText
              className={cn(
                "text-jz-gold capitalize",
                appLanguage === "eng" && "font-kaushan",
                appLanguage === "ukr" && "font-marck",
                appLanguage === "blr" && "font-marck"
              )}
              delay={1}
            >
              {translate("Pavel Arakelian")}
            </Animated.HighlightedText>
          </Animated.Title>
          <div className="flex order-3">
            <Animated.Text
              className={cn(
                "text-[14px] text-balance sm:text-[18px] xl:text-[20px]",
                appLanguage === "eng" && "font-kameron tracking-[0.05em]",
                appLanguage === "ukr" && "font-inter",
                appLanguage === "blr" && "font-inter"
              )}
              delay={1.3}
            >
              {translate("Hero text")}{" "}
              <Link
                className={cn(
                  "order-4 font-bold text-jz-gold sm:text-[18px] xl:text-[20px]",
                  appLanguage === "eng" &&
                    "font-kaushan text-[14px] sm:text-[18px] xl:text-[20px] tracking-[0.05em]",
                  appLanguage === "ukr" &&
                    "font-marck text-[20px] sm:text-[24px] xl:text-[26px]",
                  appLanguage === "blr" &&
                    "font-marck text-[20px] sm:text-[24px] xl:text-[26px]"
                )}
                href="#contacts"
              >
                {translate("Say HI now")}
              </Link>
            </Animated.Text>
          </div>
        </div>
        <div className="order-1 xl:self-end mb-[5px] sm:mb-0 self-center lg:self-start">
          <Animated.Image
            src={heroImage}
            alt="Pavel Arakelian portrait"
            className="aspect-[624/377] object-contain"
            duration={0.7}
          />
        </div>
      </div>
      <Animated.Content
        className="flex items-center gap-[20px] sm:gap-[36px] px-[16px] sm:px-[32px]"
        delay={2}
      >
        <Button
          className="bg-jz-gold rounded-full sm:size-[72px] size-[56px]"
          iconName={isAudioPlay ? "pause" : "play"}
          onClick={handleAudioToggle}
          title={isAudioPlay ? translate("Pause") : translate("Play")}
        />
        <Link
          className="flex justify-center items-center border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent px-[15px] sm:px-[32px] py-[5px] sm:py-[10px] rounded-[40px] font-bold font-inter text-[16px] text-jz-main sm:text-[18px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors"
          href={pdf}
          isDefaultLink
          isOpenInNewPage
        >
          {translate("Grab Intro")}
        </Link>
        <audio preload="none" className="hidden" ref={audioRef}>
          <source src={heroAudio} />
        </audio>
      </Animated.Content>
    </section>
  );
};

export { HeroSection };
