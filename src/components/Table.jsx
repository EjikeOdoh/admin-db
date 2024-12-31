import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

const StickyHeader = ({ arr, columns, actions }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Handles pagination change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handles rows-per-page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '100%' }}>
                <Table stickyHeader aria-label="sticky table" sx={{
                    '& .MuiTableCell-stickyHeader': {
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                    '& .MuiTableRow-hover:hover': {
                        backgroundColor: '#f5f5f5',
                    },
                }}>
                    <TableHead>
                        <TableRow>
                            {/* Render column headers dynamically */}
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || 'left'}
                                    style={{ minWidth: column.minWidth || 100 }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Paginate rows */}
                        {arr
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {/* Render cells dynamically */}
                                    {columns.map((column) => {
                                        // Handle 'actions' column separately
                                        if (column.id === 'actions') {
                                            return (
                                                <TableCell key={column.id} align={column.align || 'left'}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            gap: 1,
                                                        }}
                                                    >
                                                        {actions.map((action, actionIndex) => (
                                                            <action.Component
                                                                key={actionIndex}
                                                                {...action.props(row)}
                                                            />
                                                        ))}
                                                    </Box>
                                                </TableCell>
                                            );
                                        }
                                        // Render other cells
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align || 'left'}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={arr.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default StickyHeader;
