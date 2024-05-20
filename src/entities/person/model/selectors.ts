import { TypeRootState } from "@/app/appStore";

export const selectPersonsState = (state: TypeRootState) => state.person;

export const selectPersons = (state: TypeRootState) =>
  selectPersonsState(state).persons;

export const selectSelectedPerson = (state: TypeRootState) =>
  selectPersonsState(state).selectedPerson;
