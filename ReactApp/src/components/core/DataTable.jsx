import React, { useState } from "react";
import { DataTable as PRDataTable } from "primereact/datatable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { utils } from "../../utils";

const DataTable = ({ heading, state, children, serialNo = true }) => {
  const [globalFilter, setGlobalFilter] = useState(null);

  const header = (
    <div className="flex flex-wrap gap-2 items-center justify-between">
      <h3 className="!mb-0 ml-3">{heading}</h3>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </IconField>
    </div>
  );

  return (
    <div className="card border rounded-md">
      <PRDataTable
        value={state}
        emptyMessage="No Record(s) Found!"
        dataKey="id"
        size="small"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        className="*:whitespace-nowrap"
        globalFilter={globalFilter}
        header={header}
      >
        {serialNo && (
          <Column
            header="S. No."
            body={(_, { rowIndex }) => (
              <div className="text-center">{rowIndex + 1}</div>
            )}
          />
        )}
        {children}
      </PRDataTable>
    </div>
  );
};

const statusBodyTemplate = (rowData) => {
  return (
    <Tag
      value={utils.getStatusSeverity(rowData).value}
      severity={utils.getStatusSeverity(rowData).status}
    ></Tag>
  );
};

export { DataTable, statusBodyTemplate };
