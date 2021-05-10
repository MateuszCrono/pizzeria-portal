import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'ordered', order: 'pizza salame'},
  {id: '2', status: 'ordered', order: 'burger'},
  {id: '3', status: 'ordered', order: 'cafe latte'},
  {id: '4', status: 'prepared', order: 'spaghetti, lasagna'},
  {id: '5', status: 'ordered', order: 'cake'},
  {id: '6', status: 'prepared', order: 'pizza margharita'},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>in preperation</Button>
      );
    case 'prepared':
      return (
        <Button>READY</Button>
      );
    default:
      return 'free';
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table/Order Number</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/kitchen/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
