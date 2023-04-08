import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ShopMan`;
  }, [title]);

  return null;
};
