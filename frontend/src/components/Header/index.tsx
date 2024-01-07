import { useEffect, useState } from "react";
import MenuLinks from "../MenuLinks";
import Logo from "../Logo";
import styles from "./index.module.scss";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export default function Header() {
  const scroll = useScrollPosition();
  return (
    <header className={`${styles.wrapper} ${scroll ? styles.active : ""}`}>
      <div className={`${styles.innerWrapper} container`}>
        <Logo />
        <MenuLinks className="flex items-center gap-6" />
      </div>
    </header>
  );
}
