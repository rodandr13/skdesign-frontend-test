import { selectSelectedPerson } from "@/entities/person/model/selectors";
import { useAppSelector } from "@/shared/lib/hooks/redux";

export const SelectedPersonInfo = () => {
  const selectedPerson = useAppSelector(selectSelectedPerson);

  if (!selectedPerson) {
    return null;
  }

  return (
    <ul>
      <li>
        Выбран пользователь: <b>{selectedPerson.firstName}</b>
      </li>
      <li>
        {" "}
        Описание:
        <br />
        <textarea value={selectedPerson.description} readOnly></textarea>
      </li>
      <li>
        Адрес проживания: <b>{selectedPerson.address.streetAddress}</b>
      </li>
      <li>
        Город: <b>{selectedPerson.address.city}</b>
      </li>
      <li>
        Провинция/штат: <b>{selectedPerson.address.state}</b>
      </li>
      <li>
        Индекс: <b>{selectedPerson.address.zip}</b>
      </li>
    </ul>
  );
};
