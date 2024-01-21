import { AiOutlineRead } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
// import LogoutButton from "./LogoutButton";
// import SignInBtn from "./SignInBtn";

interface Props {
  closeDrawer?: () => void;
  className?: string;
}

export default function MenuLinks(props: Props) {
  return (
    <ul className={`${props.className} text-white`}>
      <li>
        <a href="/quizzes" className="menu-link">
          <BsQuestionSquare />
          Quizzes
        </a>
      </li>
      <li>
        <a href="/exploration" className="menu-link">
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
