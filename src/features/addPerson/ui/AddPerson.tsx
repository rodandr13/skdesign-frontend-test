import React from "react";

import { PersonForm } from "./components/PersonForm";
import { useAddPersonForm } from "../hooks/useAddPersonForm";

export const AddPerson = () => {
  const {
    showForm,
    setShowForm,
    formData,
    errors,
    handleInputChange,
    handlePhoneChange,
    handleSubmit,
  } = useAddPersonForm();

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
