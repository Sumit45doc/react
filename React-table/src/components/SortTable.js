import React from "react";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useSortBy } from "react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import './table.css';
function SortTable() {
    const columns = React.useMemo(() => COLUMNS, []);
    // const columns = React.useMemo(() => GROUPED_COLUMNS, []);
    const data = React.useMemo(() => MOCK_DATA, []);
    const tableData = {
        columns,
        data,
    }
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable(tableData, useSortBy);


    return (
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
    );
}

export default SortTable;
