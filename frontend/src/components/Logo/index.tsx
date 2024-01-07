import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import styles from "./index.module.scss";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper} onClick={() => navigate("/")}>
      <img src={logo} alt="logo" width={50} height={50} />
      <span className={styles.logo}>CodeHabits</span>
    </div>
  );
}
