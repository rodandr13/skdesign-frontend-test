import { useState } from "react";

export const GlobalFilter = () => {
  const [filterValue, setFilterValue] = useState("");
  const [globalFilter, setGlobalFilter] = useState("");

  const handleCLickFilter = () => {
    setGlobalFilter(String(filterValue));
  };

  return (
    <div>
      <input
        value={filterValue ?? ""}
        onChange={(e) => setFilterValue(String(e.target.value))}
        placeholder="Фильтр по таблице"
      />
      <button onClick={handleCLickFilter}>Фильтровать</button>
    </div>
  );
};
