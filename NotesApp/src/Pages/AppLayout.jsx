import AppNav from "../components/AppNav";
import Notes from "./Notes";
import styles from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <AppNav />
      <Notes />
    </div>
  );
};

export default AppLayout;
