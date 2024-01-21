import Logo from "../Logo";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import MenuLinks from "../MenuLinks";

export default function Header() {
  const scroll = useScrollPosition();

  return (
    <header
      className={`fixed  px-8 z-50 w-full top-0 ${
        scroll ? "bg-[#00000090] py-3" : "py-4"
      }`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <MenuLinks className="flex items-center gap-6" />
      </div>
    </header>
  );
}
