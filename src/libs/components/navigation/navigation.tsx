import { Link } from "~/libs/components/components";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";
import { cn } from "~/libs/utils/utils";

type Properties = {
  className?: string;
  itemClassName?: string;
  onClick?: () => void;
};

const Navigation: React.FC<Properties> = ({
  className,
  itemClassName,
  onClick,
}) => {
  return (
    <nav>
      <ul
        className={cn(
          "flex lg:flex-row flex-col gap-[24px] font-inter",
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
                {navigationItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navigation };
