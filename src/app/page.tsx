import { SMALL_DATA_COUNT } from "@/app/lib/constans";
import { getData } from "@/app/lib/getData";
import { BasicTable } from "@/components/BasicTable";
import { DataType } from "@/types";

import styles from "./page.module.scss";

export default async function Home() {
  const data: DataType[] = await getData(SMALL_DATA_COUNT);
  return (
    <main className={styles.main}>
      <BasicTable fetchData={data} />
    </main>
  );
}
