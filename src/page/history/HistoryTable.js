import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { NoEncryption } from "@mui/icons-material";

function createData(order_id, user, start_time, finish_time, a1, b2, c3, d4, status) {
  return {
    order_id, user, start_time, finish_time, a1, b2, c3, d4, status,
  };
}


let rows = [
  createData(293, 'SMART FACTORY HCI LAB', '00:00:00', '00:00:00', 'red', 'green', 'blue', 'yellow', 'Success'),
  createData(234, 'SMART FACTORY HCI LAB', '00:00:00', '00:00:00', 'red', 'green', 'blue', 'yellow', 'Failed'),
  createData(238, 'SMART FACTORY HCI LAB', '00:00:00', '00:00:00', 'red', 'green', 'blue', 'yellow', 'Pending'),
  createData(239, 'SMART FACTORY HCI LAB', '00:00:00', '00:00:00', 'red', 'green', 'blue', 'yellow', 'Success'),
  createData(240, 'SMART FACTORY HCI LAB', '00:00:00', '00:00:00', 'red', 'green', 'blue', 'yellow', 'Success'),
  createData(241, 'SMART FACTORY HCI LAB', '00:00:00', '00:00:00', 'red', 'green', 'blue', 'yellow', 'Success'),
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'order_id',
    numeric: true,
    disablePadding: true,
    label: '#',
  },
  {
    id: 'user',
    numeric: true,
    disablePadding: false,
    label: 'ผู้ใช้งาน',
  },
  {
    id: 'start_time',
    numeric: true,
    disablePadding: false,
    label: 'เวลาเริ่มต้น',
  },
  {
    id: 'finish_time',
    numeric: true,
    disablePadding: false,
    label: 'เวลาสิ้นสุด',
  },
  {
    id: '1',
    numeric: true,
    disablePadding: false,
    label: '1',
  },
  {
    id: '2',
    numeric: false,
    disablePadding: false,
    label: '2',
  },
  {
    id: '3',
    numeric: false,
    disablePadding: false,
    label: '3',
  },
  {
    id: '4',
    numeric: false,
    disablePadding: false,
    label: '4',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const [post, setpost] = useState(null)
  const [state, setState] = useState(0)
  const row_e = [];
  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/history_order/').then((response) => {
      [setpost] = setpost(response.data)

    })
  }, [])
  if (state === 0) {


    // axios.get('http://127.0.0.1:8000/history_order/').then(response => [setpost] = setpost(response.data))
    if (post != null) {

      for (const a in post) {
        const b = post[a]["order"].replace("[", "")
        const c = b.replace("]", "")
        const d = c.split("'")


        // rows.push(createData(post[a]["order_num"],post[a]["user"],post[a]["time_start"],post[a]["time_stop"],d[1],d[3],d[5],d[7],post[a]["status"]))
        row_e.push(createData(post[a]["order_num"], post[a]["user"], post[a]["time_start"], post[a]["time_stop"], d[1], d[3], d[5], d[7], post[a]["status"]))

      }


      rows = [...new Set(row_e)];
      console.log(rows)
      // console.log(rowss)
      setState(1)
    }

  }

  // if (post != null){
  // useEffect (()=>{

  //   for (const a in post){
  //     const b = post[a]["order"].replace("[","")
  //     const c = b.replace("]","")
  //     const d = c.split("'")


  //     rows.push(createData(post[a]["order_num"],post[a]["user"],post[a]["time_start"],post[a]["time_stop"],d[1],d[3],d[5],d[7],post["status"]))

  // }
  // },[])
  // }

  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          History order
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            {/* <DeleteIcon /> */}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.order_id}
                      </TableCell>
                      <TableCell align="left">{row.user}</TableCell>
                      <TableCell align="left">{row.start_time}</TableCell>
                      <TableCell align="left">{row.finish_time}</TableCell>
                      <TableCell align="left">{row.a1}</TableCell>
                      <TableCell align="left">{row.b2}</TableCell>
                      <TableCell align="left">{row.c3}</TableCell>
                      <TableCell align="left">{row.d4}</TableCell>
                      <TableCell align="left"><Chip label={row.status} color={row.status === "Success" ? "success" : row.status === "Failed" ? "error" : row.status === "Pending" ? "warning" : "primary"} /></TableCell>
                    </TableRow>

                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
