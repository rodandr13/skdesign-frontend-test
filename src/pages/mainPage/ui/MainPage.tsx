import { PersonViewer } from "@/widgets/personViewer";

import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <PersonViewer />
    </main>
  );
};
