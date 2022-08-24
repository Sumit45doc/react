import './App.css';
// import BasicTable from './components/BasicTable';
// import ColumnHiding from './components/ColumnHiding';
// import ColumnOrder from './components/ColumnOrder';
// import FilterTable from './components/FilterTable';
// import PaginationTable from './components/PaginationTable';
// import RowSelection from './components/RowSelection';
// import SortTable from './components/SortTable';
import User from './components/User';
import { format } from "date-fns"
import makeData from './components/MOCK_DATA.json';
import React from 'react';
import DeleteCell from './components/DeleteCell';

function App() {
  const [data, setData] = React.useState(React.useMemo(() => makeData, []));

  const COLUMNS = [
    {
      Header: 'ID',
      Footer: 'IDs',
      accessor: 'id',
      disableFilters: true
    },
    {
      Header: 'First_Name',
      Footer: 'First_Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last_Name',
      Footer: 'Last_Name',
      accessor: 'last_name',
    },
    {
      Header: 'Date of Birth',
      Footer: 'Date of Birth',
      accessor: 'date_of_birth',
      Cell: ({ value }) => format(new Date(value), 'dd/MM/yyyy'),
    },
    {
      Header: 'Country',
      Footer: 'Country',
      accessor: 'country',
    },
    {
      Header: 'Phone Number',
      Footer: 'Phone Number',
      accessor: 'phone',
    },
    {
      Header: 'Delete',
      accessor: () => 'delete',
      disableFilters: true,
      Cell: (tableProps) => <DeleteCell tableProps={tableProps} data={data} setData={setData} />
    }
  ]
  
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortTable /> */}
      {/* <FilterTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      <User COLUMNS={COLUMNS} data={data} />
    </div>
  );
}

export default App;
