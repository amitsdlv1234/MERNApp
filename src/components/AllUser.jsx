import React from 'react'
import { useEffect,useState } from 'react'

import {Button, Table, TableBody, TableCell, TableHead, TableRow ,styled} from '@mui/material'
import { getUsers , deleteUser } from '../service/api.js';
import {Link} from 'react-router-dom';

const StyledTable=styled(Table)`width:90%;
                                margin:30px auto 0 auto;`

const THead=styled(TableRow)`background:#000000;
                            &>th {
                              color:#fff;
                              font-size:20px  
                            } ` ;
 const TBody= styled(TableRow)`&>td{
                              font-size:20px; 
                                          }`                           
                            

function AllUser() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers=async()=>{
    let res=await getUsers();
    setUsers(res.data);
    // console.log(res);
  }

  const deleteUserDetails= async(id)=>{
    await deleteUser(id);
          getAllUsers();
  }
  return (
    <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
        {
          users.map(user=>(
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight:10}} component={Link} to ={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
        </TableBody>
    </StyledTable>
  )
}

export default AllUser
