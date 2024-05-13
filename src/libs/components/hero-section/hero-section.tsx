import { useCallback, useRef, useState } from "react";
import heroAudio from "~assets/audio/pavel-audio.mp3";
import heroImage from "~assets/images/hero-image.png";
import { Button } from "~components/components";

const HeroSection: React.FC = () => {
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioToggle = useCallback(() => {
    if (isAudioPlay) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsAudioPlay((isAudioPlayPrev) => !isAudioPlayPrev);
  }, [audioRef, isAudioPlay]);

  return (
    <section className="flex flex-col gap-y-[16px] sm:gap-y-[36px] xl:mt-[20px] w-full max-w-[1400px]">
      <div className="relative flex xl:flex-row flex-col gap-[8px] sm:gap-[24px] bg-[url('/src/assets/images/notes-hero-background.svg')] px-[16px] sm:px-[32px]">
        <div className="xl:flex flex-col gap-y-[36px] p-[8px] xl:basis-[688px] basis-[600px] contents shrink-0">
          <h1 className="flex xl:flex-col flex-wrap sm:gap-[10px] lg:gap-0 order-2 font-karantina text-[32px] sm:text-[70px] xl:text-[100px] tracking-[0.05em]">
            Music is the Language
            <span className="font-kaushan text-jz-gold capitalize">
              of hearts
            </span>
          </h1>
          <p className="order-3 text-[14px] text-balance sm:text-[18px] xl:text-[20px] tracking-[0.05em]">
            Apart from his secret jam sessions in various European cities, where
            Pavel is happy to share his mastery with his young
            colleagues-performers, the musician has already become a welcome
            guest at wider music events. Pavel is always happy to meet his
            admirers in person over a glass of bourbon!
          </p>
        </div>
        <div className="order-1 xl:self-end mb-[5px] xs:mb-0 self-center lg:self-start">
          <img
            src={heroImage}
            alt="Pavel Arakelian portrait"
            className="w-[688px] object-contain"
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px] sm:gap-[36px] px-[16px] sm:px-[32px]">
        <Button
          className="bg-jz-gold rounded-full sm:size-[72px] size-[56px]"
          iconName={isAudioPlay ? "pause" : "play"}
          onClick={handleAudioToggle}
          title={isAudioPlay ? "Pause" : "Play"}
        />
        <Button label="Read more" />
        <audio preload="none" className="hidden" ref={audioRef}>
          <source src={heroAudio} />
        </audio>
      </div>
    </section>
  );
};

export { HeroSection };
