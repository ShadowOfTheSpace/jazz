type Properties = {
  children: React.ReactNode;
  className?: string;
  href: string;
  isOpenInNewPage?: boolean;
  onClick?: () => void;
  title?: string;
};

const Link: React.FC<Properties> = ({
  children,
  className,
  href,
  isOpenInNewPage = false,
  onClick,
  title,
}) => {
  return (
    <a
      className={className}
      href={href}
      target={isOpenInNewPage ? "_blank" : undefined}
      rel="noreferrer"
      onClick={onClick}
      title={title}
    >
      {children}
    </a>
  );
};

export { Link };
