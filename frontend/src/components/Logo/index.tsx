import logo from "./../../assets/logo.svg";
import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={logo} alt="logo" width={50} height={50} />
      <span className="text-white text-lg font-semibold">CodeHabits</span>
    </div>
  );
}
