import { matchPath } from "react-router-dom";
import { type AppRoute } from "~enums/enums.js";

const checkIfPathMatchingPattern = (
  path: string,
  pattern: (typeof AppRoute)[keyof typeof AppRoute]
): boolean => {
  return Boolean(matchPath(pattern, path));
};

export { checkIfPathMatchingPattern };
