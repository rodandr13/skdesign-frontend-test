"use client";
import { AddPerson } from "@/features/addPerson";
import { LoadPersonsData } from "@/features/loadPersonsData";
import { SelectedPersonInfo } from "@/features/selectedPersonInfo/SelectedPersonInfo";
import { BIG_DATA_COUNT, SMALL_DATA_COUNT } from "@/shared/lib/constans";

import { Table } from "./components/Table";
import styles from "./styles.module.scss";

export const PersonViewer = () => {
  console.log("PersonViewer");

  return (
    <section className={styles.personView}>
      <div className={styles.personView__buttonsDataGroup}>
        <h2 className={styles.personView__title}>Выберите набор данных</h2>
        <div className={styles.personView__buttonsGroup}>
          <LoadPersonsData dataRows={SMALL_DATA_COUNT} title="Маленький" />
          <LoadPersonsData dataRows={BIG_DATA_COUNT} title="Большой" />
        </div>
      </div>
      <AddPerson />
      <Table />
      <SelectedPersonInfo />
    </section>
  );
};
