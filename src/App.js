
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//nmnmnm



import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';





//https://reqres.in/api/users?page=2




function App() {
 
  const [page, setpage] = useState(1)
  const [list, setlist] = useState([])

  

  useEffect(() => {
  axios.get(`https://reqres.in/api/users?page=${page}`)
  .then(function (response) {
    
  console.log(response);
    const {data}=response.data
    console.log(data)
    setlist(data)
  })
},[page]);

 

 const pageChange=(event,value)=>{
   console.log(event)
   console.log(value)
   setpage(value)
   console.log(page)

 }
 
  

  return (
    <div className="App">
      <h1>Users Details</h1>
   
      <div style={{width:"80%",margin:"0 auto"}}>
      <TableContainer  component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
              <img className="avatar" src={row.avatar} alt={row.first_name}/>
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <div className="page">

<Stack spacing={2}>

<Pagination count={2} color="primary" 
   onChange={pageChange}
/>

</Stack>






</div>
       
     
    
     
    </div>
  );
}

export default App;
