"use client";
import React from "react";

import { fetchPersons } from "@/entities/person";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { Button } from "@/shared/ui/button/Button";

import { setLoading } from "../model/loadingSlice";

interface Props {
  dataRows: number;
  title: string;
}

export const LoadPersonsData = ({ dataRows, title }: Props) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadingData.loading);

  const loadData = async () => {
    dispatch(setLoading(true));
    try {
      await dispatch(fetchPersons(dataRows)).unwrap();
    } catch (error) {
      console.error("Ошибк при загрузке данных:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return <Button onClick={loadData} title={title} disabled={loading} />;
};
