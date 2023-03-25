import { AppBar, Avatar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React from 'react'
// import { NotificationsIcon, SettingsIcon, LogoutIcon } from '@mui/icons-material';

import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Box sx={style.leftContainer} >
                <Typography variant='h6' color="#fff" >
                    STN Management System
                </Typography>
            </Box>
            <Box sx={{ flexGrow :1  }}/>
            <Box sx={style.rightContainer}>
            <IconButton title='NOtifictions' >
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon sx={{ color: "#fff"}}  />
                    </Badge>
                </IconButton>
                <IconButton title='NOtifictions'sx={{ color: "#fff"}}>
                         <SettingsIcon />
                </IconButton>
                <IconButton title='NOtifictions' sx={{ color: "#fff"}}>
                <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
                </IconButton>

            </Box>
        </Toolbar>
    </AppBar>
    )
}

/** @type {import("@mui/material").SxProps}*/
const style={
    rightContainer:{
       
    }

}

export default Navbar