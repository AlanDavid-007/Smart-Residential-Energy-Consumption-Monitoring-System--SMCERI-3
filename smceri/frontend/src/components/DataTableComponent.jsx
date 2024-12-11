import React, { useEffect, useRef } from "react";
import { DataTable } from "simple-datatables";

const DataTableComponent = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      new DataTable(tableRef.current, {
        perPageSelect: [5, 10, 15, ["All", -1]],
      });
    }
  }, []);

  return (
    <table ref={tableRef} className="datatable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>30</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>25</td>
          <td>UK</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTableComponent;
