import { Link } from "~components/components";
import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";

type Properties = {
  className?: string;
  displayVariant?: "flex" | "grid";
  itemClassName?: string;
  onClick?: () => void;
};

const Navigation: React.FC<Properties> = ({
  className,
  displayVariant = "flex",
  itemClassName,
  onClick,
}) => {
  const { translate } = useLanguageContext();

  return (
    <nav>
      <ul
        className={cn(
          "gap-[24px] font-inter",
          displayVariant === "flex"
            ? "flex lg:flex-row flex-col"
            : "grid sm:grid-cols-2 grid-cols-1",
          className
        )}
      >
        {NAVIGATION_ITEMS.map((navigationItem) => {
          return (
            <li className="leading-none" key={navigationItem.label}>
              <Link
                className={cn(
                  "has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors",
                  itemClassName
                )}
                href={navigationItem.href}
                title={navigationItem.label}
                onClick={onClick}
              >
                {translate(navigationItem.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navigation };
