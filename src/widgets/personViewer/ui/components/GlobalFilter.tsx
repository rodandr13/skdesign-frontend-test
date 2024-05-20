import { useState } from "react";

import { useAppDispatch } from "@/shared/lib/hooks/redux";
import { Button } from "@/shared/ui/button/Button";
import { setGlobalFilter } from "@/widgets/personViewer/model/globalFilterSlice";

export const GlobalFilter = () => {
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useAppDispatch();

  const handleCLickFilter = () => {
    dispatch(setGlobalFilter(filterValue));
  };

  return (
    <>
      <input
        value={filterValue ?? ""}
        onChange={(e) => setFilterValue(String(e.target.value))}
        placeholder="Фильтр по таблице"
      />
      <Button title="Фильтровать" onClick={handleCLickFilter} />
    </>
  );
};
