import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserTripRequestsAction } from '../../actions/requests/tripRequestsAction';

function createData(origin, destination, accomodation, tripType, status, departureDate, returnDate) {
  return { origin, destination, tripType, status, accomodation, departureDate, returnDate };
}

const rows = [
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
  createData('Nairobi', 'New York', '-', 'Multi City', 'Pending', '15-Feb-2020', '15-Mar-2020'),
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

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'Origin', disablePadding: false, label: 'Origin' },
  { id: 'Destination', disablePadding: false, label: 'Destination' },
  { id: 'Trip Type', disablePadding: false, label: 'Trip Type' },
  { id: 'Status', disablePadding: false, label: 'Status' },
  { id: 'Accomodation', disablePadding: false, label: 'Accomodation' },
  { id: 'Departure Date', disablePadding: false, label: 'Departure Date' },
  { id: 'Return Date', disablePadding: false, label: 'Return Date' },
];

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align='left'
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  container: {
    maxHeight: 440,
  },
}));

export const Requests = (props) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() =>{
    if (props.trips.length == 0) {
      console.log('ydtfkguhiopuigyfkjg');
      
      props.getUserTripRequestsAction();
    }
  })

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    props.history.push('/requests/1')
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Box>
      <Paper >
        <Toolbar >
          <Typography className={classes.title} variant="h6" id="tableTitle">
            My Trip Requests
          </Typography>
        </Toolbar>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, index)}
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                      <TableCell align="left">{row.origin}</TableCell>
                      <TableCell align="left">{row.destination}</TableCell>
                      <TableCell align="left">{row.tripType}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.accomodation}</TableCell>
                      <TableCell align="left">{row.departureDate}</TableCell>
                      <TableCell align="left">{row.returnDate}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (33) * emptyRows }}>
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
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export const mapStateToProps = (state) => {
  return {
      trips: state.getUserTripRequestsReducer.myTrips
  };
};

export default connect(mapStateToProps, { getUserTripRequestsAction })(withRouter(Requests));
