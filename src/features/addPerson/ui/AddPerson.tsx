import { ChangeEvent, FormEvent, useState } from "react";

import { addPerson } from "@/entities/person";
import { useAppDispatch } from "@/shared/lib/hooks/redux";
import { Person } from "@/shared/types/types";

export const AddPerson = () => {
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Person>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: [],
    description: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addPerson(formData));
    setFormData({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: [],
      description: "",
    });
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Отменить" : "Добавить"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>id:</label>
            <input
              type="number"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>firstName:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>lastName:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(xxx)xxx-xx-xx"
            />
          </div>
          <button type="submit">Добавить в таблицу</button>
        </form>
      )}
    </div>
  );
};
