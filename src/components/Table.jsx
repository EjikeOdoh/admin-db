// import React from 'react';
// import { useReactTable } from '@tanstack/react-table';

// export default function Table({ columns, data, totalPages, currentPage, setPageIndex, fetchPage }) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     canPreviousPage,
//     canNextPage,
//     pageIndex,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//   } = useReactTable(
//     {
//       columns,
//       data,
//       initialState: {
//         pageIndex: currentPage,
//         pageSize: 5,
//       },
//       manualPagination: true,
//       pageCount: totalPages,
//       autoResetPage: false,
//     }
//   );

//   // Use the `usePagination` functionality directly within `useTable`
//   const handlePageChange = (newPageIndex) => {
//     setPageIndex(newPageIndex);
//     fetchPage(newPageIndex);
//   };

//   return (
//     <div>
//       <table {...getTableProps()} className="table-auto w-full border-collapse">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()} className="px-4 py-2 border-b">
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()} className="px-4 py-2 border-b">
//                     {cell.render('Cell')}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div className="pagination mt-4 flex justify-between items-center">
//         <button onClick={() => handlePageChange(pageIndex - 1)} disabled={!canPreviousPage}>
//           Previous
//         </button>
//         <span>
//           Page {pageIndex + 1} of {pageCount}
//         </span>
//         <button onClick={() => handlePageChange(pageIndex + 1)} disabled={!canNextPage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
