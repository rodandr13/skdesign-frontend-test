import { useAppSelector } from "@/shared/lib/hooks/redux";

import { PersonForm } from "./components/PersonForm";
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
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Отменить" : "Добавить"}
      </button>
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
