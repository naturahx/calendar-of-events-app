import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
  value: string;
}

const Header: FC<HeaderProps> = ({ value }) => {
  return (
    <header className={styles.header}>
      <div className={styles.user}>{value.toUpperCase()}</div>
      <Link to="/">
        <button className={styles.out}>OUT TO ACCOUNT</button>
      </Link>
    </header>
  );
};

export default Header;
