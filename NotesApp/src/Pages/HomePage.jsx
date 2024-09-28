import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Notes Keep You Organized</h1>
        <Link to="/login" className="cta">
          Lets make Notes
        </Link>
      </section>
    </main>
  );
}
export default HomePage;
