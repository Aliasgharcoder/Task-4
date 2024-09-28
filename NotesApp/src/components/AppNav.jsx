import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import Logo from "./Logo";
const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/" className={styles.ctaLink}>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
