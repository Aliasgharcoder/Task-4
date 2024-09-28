import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <Link to={"/"}>
      <img src="../note.png" alt="Notes Logo" className={styles.logo}></img>
    </Link>
  );
}
export default Logo;
