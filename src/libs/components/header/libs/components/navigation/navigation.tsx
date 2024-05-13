import { Link } from "~/libs/components/components";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col gap-[24px] font-inter">
        {NAVIGATION_ITEMS.map((navigationItem) => {
          return (
            <li key={navigationItem.label}>
              <Link
                className="has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors"
                href={navigationItem.href}
                title={navigationItem.label}
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
