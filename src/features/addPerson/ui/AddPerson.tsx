import { useAppSelector } from "@/shared/lib/hooks/redux";
import { Button } from "@/shared/ui/button/Button";

import { PersonForm } from "./components/PersonForm";
import styles from "./styles.module.scss";
import { useAddPersonForm } from "../hooks/useAddPersonForm";

export const AddPerson = () => {
  console.log("AddPerson");
  const { loading, persons } = useAppSelector((state) => state.person);
  const isDataLoaded = !loading && persons.length > 0;
  const {
    showForm,
    setShowForm,
    formData,
    errors,
    handleInputChange,
    handlePhoneChange,
    handleSubmit,
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
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
          onPhoneChange={handlePhoneChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
