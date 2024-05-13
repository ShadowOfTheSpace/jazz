import { Link } from "~/libs/components/components";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";

type Properties = {
  onClick?: () => void;
};

const Navigation: React.FC<Properties> = ({ onClick }) => {
  return (
    <nav>
      <ul className="flex lg:flex-row flex-col gap-[24px] font-inter">
        {NAVIGATION_ITEMS.map((navigationItem) => {
          return (
            <li key={navigationItem.label}>
              <Link
                className="has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors"
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
