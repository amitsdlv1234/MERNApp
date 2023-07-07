import React from 'react'
import {AppBar,Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
          background:#111111
        `;
    const Tabs=styled(NavLink)`
            font-size:20px;
            margin-right:40px;
            color:white;
            text-decoration:none
       `;
function Navbar() {
  return (
    <Header position='static'>
     <Toolbar>
         <Tabs to='/'> Code for interview</Tabs>
         <Tabs to='/all'>All User</Tabs>
         <Tabs to='/add'>Add user</Tabs>
     </Toolbar>
    </Header>
  )
}

export default Navbar
