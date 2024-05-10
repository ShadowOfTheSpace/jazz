import { Link } from "~/libs/components/components";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-[24px] font-inter">
        {NAVIGATION_ITEMS.map((navigationItem) => {
          return (
            <li>
              <Link
                className="hover:text-jz-gold"
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
