import { Link as ReactLink } from "react-router-dom";

type Properties = {
  children: React.ReactNode;
  className?: string;
  href: string;
  isOpenInNewPage?: boolean;
  onClick?: () => void;
  title?: string;
  isDefaultLink?: boolean;
};

const Link: React.FC<Properties> = ({
  children,
  className,
  href,
  isOpenInNewPage = false,
  onClick,
  title,
  isDefaultLink,
}) => {
  const isUseDefaultLink = href.includes("#") || isDefaultLink;

  return (
    <>
      {isUseDefaultLink ? (
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
      ) : (
        <ReactLink
          className={className}
          to={href}
          target={isOpenInNewPage ? "_blank" : undefined}
          rel="noreferrer"
          onClick={onClick}
          title={title}
        >
          {children}
        </ReactLink>
      )}
    </>
  );
};

export { Link };
