import { ACHIEVEMENTS } from "./libs/constants/constants";

const AchievementsSection: React.FC = () => {
  return (
    <section className="flex justify-center bg-[url('/src/assets/images/achievements-background.png')] bg-no-repeat md:bg-center bg-right lg:py-[90px] p-[16px] sm:p-[32px] w-full max-w-[100vw]">
      <div className="flex justify-center bg-jz-main/80 backdrop-blur-[10px] rounded-[10px] w-full max-w-[1400px]">
        <div className="box-content flex md:flex-row flex-col justify-between gap-[32px] p-[16px] sm:p-[32px] w-full max-w-[1024px]">
          {ACHIEVEMENTS.map((achievement) => {
            return (
              <div
                className="flex flex-col items-center"
                key={achievement.name}
              >
                <p className="font-kaushan text-[40px] sm:text-[72px] lg:text-[88px]">
                  {achievement.count}
                </p>
                <p className="font-kaushan text-[24px] text-jz-gold sm:text-[28px] lg:text-[32px]">
                  {achievement.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { AchievementsSection };
