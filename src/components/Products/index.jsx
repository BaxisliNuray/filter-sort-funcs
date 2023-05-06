import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState,useRef } from "react";
import Paper from '@mui/material/Paper';
import { Container, Pagination } from '@mui/material';
import Search from '../Search';
import Sort from '../Sort';




export default function Products() {
  const [users, setUsers] = useState([])
  const storage =useRef([])
  

  const fetchData = () => {
    fetch("https://northwind.vercel.app/api/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        storage.current=data
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <Container>
      
      <Search storage={storage} setUsers={setUsers}/>
      <br />
      <Sort users={users} setUsers={setUsers}/>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Category by id</TableCell>
            <TableCell align="right">unitPrice</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.quantityPerUnit}</TableCell>
              <TableCell align="right">{user.unitPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination users={users}/>
    </Container>
  );
}