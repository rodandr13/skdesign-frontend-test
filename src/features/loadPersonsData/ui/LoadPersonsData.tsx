"use client";

import { fetchPersons } from "@/entities/person";
import { useAppDispatch } from "@/shared/lib/hooks/redux";

interface Props {
  dataRows: number;
  title: string;
}

export const LoadPersonsData = ({ dataRows, title }: Props) => {
  const dispatch = useAppDispatch();

  const loadData = () => {
    dispatch(fetchPersons(dataRows));
  };

  return <button onClick={loadData}>{title}</button>;
};
