
import React,{useState , useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
// import React from 'react'
import {editUser, getUser} from '../service/api';
import {useNavigate , useParams} from 'react-router-dom';
const Container=styled(FormGroup)`
                                   width:50%;
                                   margin:5% auto 0 auto;
                                   & > div {
                                    margin-top:20px
                                   }       
                                   `;


 const defaultValue={
    name:'',
    username:'',
    email:"",
    phone:''
 }       

const EditUser=()=> {
    const [user , setUser]=useState(defaultValue);
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
       loadUserDetails();
    },[])
    const loadUserDetails= async ()=>{
        const res=await getUser(id);
        setUser(res.data);
    }
    const onValueChange=(e)=>{
        // console.log(e.target.name,  e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }
    const editUserDetails=async()=>{
       await editUser(user,id);
       navigate('/all');
    }

  return (
    <Container>
        <Typography variant='h4'>Edit User</Typography>
     <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}></Input>
     </FormControl>
     <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}></Input>
     </FormControl>
     <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}></Input>
     </FormControl>
     <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name ="phone" value={user.phone}></Input>
     </FormControl>
     <FormControl>
        <Button variant='contained' onClick={()=>{editUserDetails()}}>Edit User</Button>
     </FormControl>
    </Container>
  )
}

export default EditUser
