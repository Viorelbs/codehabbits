import { useEffect, useState } from "react";
import Logo from "../../public/logo.svg";
import MenuLinks from "./MenuLinks";

export default function Header() {
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

  return (
    <header
      className={`fixed  px-8 z-50 w-full top-0 ${
        scroll ? "bg-[#00000090] py-3" : "py-4"
      }`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        {/* <MenuLinks className="flex items-center gap-6" /> */}
      </div>
    </header>
  );
}
