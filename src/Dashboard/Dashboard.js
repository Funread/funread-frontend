import { Button, Container, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import { AppBar } from '@mui/material'
import { IconButton } from '@mui/material'
import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'

import React from 'react'
import "../Dashboard/Dashboard.css"


const Dashboard = () => {
  return (
      <div>
          <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                </IconButton>
                <div className='headerb'>
                <Stack spacing={2} direction="row">
                <Button variant="text" color="inherit" className='navbutton'>Home</Button>
                <Button variant="text" color="inherit" className='navbutton'>Username</Button>
                </Stack>
                {/* <FormControl fullWidth>
                  <InputLabel style={{fontColor: "white"}, {width: 300}} id="demo-simple-select-label">Username</InputLabel>
                  <Select
                    // label="Username"
                    style={{backgroundColor: "white"}}
                  >
                    <MenuItem value={10}>My Classes</MenuItem>
                    <MenuItem value={20}>My Grades</MenuItem>
                    <MenuItem value={30}>Logout</MenuItem>
                  </Select>
                </FormControl> */}
                </div>
            </Toolbar>
          </AppBar>
          <h1 className='header'>Welcome, Username!</h1>
          <div>
            <Stack spacing={2} direction="row" className='button'>
              <Button variant="contained" color='primary'>My Classes</Button>
              <Button variant="contained">My Grades</Button>
            </Stack> 
          </div>
      </div>
  )
}

export default Dashboard