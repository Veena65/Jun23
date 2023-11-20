import React from 'react'
import mdata from './Data.json';
import {columns} from './Column';
import { useMemo } from 'react';
import { useTable} from 'react-table';
import './tabsty.css';

const Bastable1 = () => {
    const column = useMemo(()=>columns,[columns])
    const data = useMemo(()=>mdata,[mdata])
    console.log(column);
    console.log(data);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable ({
        columns : column,
        data: data});
  return (
       <div>
        <h1>General Data</h1>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                    prepareRow(row);
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div> 
  )
}

export default Bastable1