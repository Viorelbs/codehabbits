import { useState, useEffect } from "react";

/**
 * Compare a custom value with scroll value
 * @returns Returns a boolean
 * */
export function useScrollPosition() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
}
