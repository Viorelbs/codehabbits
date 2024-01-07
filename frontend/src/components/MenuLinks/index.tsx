import { AiOutlineRead } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
// import LogoutButton from "./LogoutButton";
// import SignInBtn from "./SignInBtn";
import styles from "./index.module.scss";

interface Props {
  closeDrawer?: () => void;
  className?: string;
}

export default function MenuLinks(props: Props) {
  return (
    <ul className={styles.wrapper}>
      <li>
        <a href="/quizzes">
          <BsQuestionSquare />
          Quizzes
        </a>
      </li>
      <li>
        <a href="/exploration">
          <AiOutlineRead />
          Exploration
        </a>
      </li>
      {/* <li onClick={closeDrawer}>
        {isAuthenticated ? (
          <LogoutButton logout={handleLogout} />
        ) : (
          <SignInBtn />
        )}
      </li> */}
    </ul>
  );
}
