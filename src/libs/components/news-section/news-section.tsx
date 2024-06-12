import { Feed } from "./libs/components/components";

const NewsSection: React.FC = () => {
  return (
    <section
      id="news"
      className="flex flex-col px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center"
    >
      <h1 className="font-karantina text-[32px] sm:text-[70px] xl:text-[80px] tracking-[0.05em]">
        Life lines
      </h1>
      <div className="w-full [@media(max-width:351px)]:aspect-[1/2] [@media(min-width:352px)_and_(max-width:510px)]:aspect-square [@media(min-width:511px)_and_(max-width:703px)]:aspect-[3/2] [@media(min-width:704px)_and_(max-width:863px)]:aspect-[4/2] [@media(min-width:864px)_and_(max-width:1023px)]:aspect-[5/2] [@media(min-width:1024px)_and_(max-width:1183px)]:aspect-[6/2] [@media(min-width:1184px)_and_(max-width:1343px)]:aspect-[7/2] [@media(min-width:1344px)]:aspect-[8/2] overflow-hidden">
        <Feed feedId="dd40e0a5-e345-4159-b754-877b2c90ebf8" />
      </div>
    </section>
  );
};

export { NewsSection };
