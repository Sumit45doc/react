import React from "react";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useGlobalFilter, useSortBy, useFilters } from "react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './table.css';
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

function FilterTable() {
    const columns = React.useMemo(() => COLUMNS, []);
    // const columns = React.useMemo(() => GROUPED_COLUMNS, []);
    const data = React.useMemo(() => MOCK_DATA, []);

    const defaultColumn = React.useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    },[])
    const tableData = {
        columns,
        data,
        defaultColumn
    }
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter } = useTable(tableData,useFilters, useGlobalFilter,useSortBy);


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
                    {rows.map((row) => {
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
                <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()} >
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()} >{column.render('Footer')}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </>
    );
}

export default FilterTable;
