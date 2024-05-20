import React from "react";

import { useAppSelector } from "@/shared/lib/hooks/redux";
import { Button } from "@/shared/ui/button/Button";

import { PersonForm } from "./components/PersonForm";
import styles from "./styles.module.scss";
import { useAddPersonForm } from "../lib/useAddPersonForm";

export const AddPerson = () => {
  const { loading, persons } = useAppSelector((state) => state.person);
  const isDataLoaded = !loading && persons.length > 0;
  const {
    showForm,
    setShowForm,
    control,
    handleSubmit,
    errors,
    isValid,
    handlePhoneChange,
  } = useAddPersonForm();

  if (!isDataLoaded) {
    return null;
  }

  return (
    <div className={styles.addPerson}>
      <Button
        onClick={() => setShowForm(!showForm)}
        title={showForm ? "Отменить" : "Добавить строку"}
      />
      {showForm && (
        <PersonForm
          control={control}
          errors={errors}
          isValid={isValid}
          handlePhoneChange={handlePhoneChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
