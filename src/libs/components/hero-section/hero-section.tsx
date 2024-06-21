import { useCallback, useRef, useState } from "react";
import heroAudio from "~assets/audio/pavel-audio.mp3";
import heroImage from "~assets/images/hero-image.png";
import { Animated, Button, Link } from "~components/components";
import pdf from "/files/Pavel_Arakelian_press_portrait.pdf";

const HeroSection: React.FC = () => {
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
            className="order-2 font-karantina text-[32px] sm:text-[70px] xl:text-[80px] leading-tight tracking-[0.05em]"
            duration={0.7}
          >
            Thinking Jazz –{" "}
            <Animated.HighlightedText className="text-jz-gold" delay={0.6}>
              Meaning
            </Animated.HighlightedText>
            <br />
            <Animated.HighlightedText
              className="font-kaushan text-jz-gold capitalize"
              delay={1}
            >
              Pavel Arakelian
            </Animated.HighlightedText>
          </Animated.Title>
          <div className="flex order-3">
            <Animated.Text
              className="text-[14px] text-balance sm:text-[18px] xl:text-[20px] tracking-[0.05em]"
              delay={1.3}
            >
              Met Pavel Arakelian and The Outsiders at a secret jam session or
              at a crowdy performance? Have a cooperation proposal or an idea
              for collaboration? Look for an opportunity to make your event
              unforgettable or just want to keep your promise to share a glass
              of bourbon with Pavel?{" "}
              <Link
                className="order-4 font-bold font-kaushan text-[14px] text-jz-gold sm:text-[18px] xl:text-[20px] tracking-[0.05em]"
                href="#contacts"
              >
                Say HI now!
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
          title={isAudioPlay ? "Pause" : "Play"}
        />
        <Link
          className="flex justify-center items-center border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent px-[15px] sm:px-[32px] py-[5px] sm:py-[10px] rounded-[40px] font-bold font-inter text-[16px] text-jz-main sm:text-[18px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors"
          href={pdf}
          isOpenInNewPage
        >
          Grab Intro
        </Link>
        <audio preload="none" className="hidden" ref={audioRef}>
          <source src={heroAudio} />
        </audio>
      </Animated.Content>
    </section>
  );
};

export { HeroSection };
