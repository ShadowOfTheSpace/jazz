type Properties = {
  description: string;
  title: string;
};

const Placeholder: React.FC<Properties> = ({ description, title }) => {
  return (
    <div className="flex flex-col justify-center items-center border-jz-gold py-[50px] border-t border-b sm:h-[372px]">
      <h1 className="font-karantina text-[32px] text-jz-gold sm:text-[60px] capitalize tracking-widest">
        {title}
      </h1>
      <p className="text-[14px] text-balance text-center text-jz-light-gray sm:text-[24px]">
        {description}
      </p>
    </div>
  );
};

export { Placeholder };
