import React, { useState } from 'react';
import {AppBar,Toolbar,Typography,IconButton,Button,Drawer,List,ListItem,ListItemText,useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();
  const IslMobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const MenuItems = ["About","Services","Projects","Contact"];
  return (
    <>
      <AppBar elevation={0} className='navbar' position='static' sx={{backgroundColor:"white",color:"black",borderBottom:"1px solid #fafafa"}}>
          <Toolbar>
               {IslMobile ? (
                  <div>
                      <IconButton className='inherit' onClick={()=> setOpen(true)}>
                         <MenuIcon />
                      </IconButton>
                  </div>
                ):(
                  <>
                      <Typography sx={{flexGrow:1}}>
                          <h2 className='text-4xl font-extrabold'><span className='text-red-500'>D</span>egic</h2>
                      </Typography>
                      {MenuItems.map((item)=>(
                        <Button color='inherit' sx={{fontWeight:"bold"}} key={item}>{item}</Button>
                      ))}

                      <Button veriant='outlined'
                      sx={{
                        color:"#2ab691",
                        backgroundColor:"white",
                        borderRadius:"10px",
                        fontWeight:"bold",
                        "&:hover":{
                          backgroundColor:"#2ab691",
                          color:"white"
                        }}}>
                        Sign Up
                      </Button>
                  </>
                )}
          </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={open} onClose={()=> setOpen(false)}>
         <List>
           {MenuItems.map((item)=>(
             <ListItem button key={item} onClick={()=> setOpen(false)}>
                <ListItemText>{item}</ListItemText>
             </ListItem>
           ))}

           <ListItem button><ListItemText primary='Sign Up' /></ListItem>
         </List>
      </Drawer>
    </>
  )
}

export default Navbar;