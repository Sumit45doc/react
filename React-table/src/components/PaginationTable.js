import React from "react";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useGlobalFilter, useSortBy, useFilters, usePagination } from "react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './table.css';
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

function PaginationTable() {
    const columns = React.useMemo(() => COLUMNS, []);
    // const columns = React.useMemo(() => GROUPED_COLUMNS, []);
    const data = React.useMemo(() => MOCK_DATA, []);

    const defaultColumn = React.useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])
    const tableData = {
        columns,
        data,
        defaultColumn
    }
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter, page, previousPage,nextPage, canNextPage, canPreviousPage,pageOptions,gotoPage, setPageSize } = useTable(tableData, useFilters, useGlobalFilter, useSortBy, usePagination);

    return (
        <>
            <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} >
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} >
                                {
                                    headerGroup.headers.map((column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} >{column.render('Header')}
                                            <span>
                                                {column.isSorted && (column.isSortedDesc ? <TiArrowSortedDown /> : <TiArrowSortedUp />)}
                                            </span>
                                            <div>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    )))
                                }
                            </tr>

                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} >
                                {
                                    row.cells.map(cell => (
                                        <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                                    ))
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                Jump to page : {' '}
                <input defaultValue={state.pageIndex + 1} onChange={
                    e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(pageNumber);
                    }
                } />
            </div>
            <select value={state.pageSize} onChange={e => setPageSize(Number(e.target.value))}  >
                {
                    [10, 20, 30].map((pageSize) => (
                      <option key={pageSize} value={pageSize} > page size - {pageSize}</option>
                    ))
                }
            </select>
            <div>
                <span>page {state.pageIndex + 1} of {pageOptions.length} </span>
                <button onClick={() => gotoPage(0)} >{"<<"}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} >previouss page</button>
                <button onClick={() => nextPage()} disabled={!canNextPage} >next page</button>
                <button onClick={() => gotoPage(pageOptions.length - 1)} >{">>"}</button>
            </div>
        </>
    );
}

export default PaginationTable;
