import React from 'react'
import { AppBar, Toolbar, Avatar, InputBase, Badge, IconButton, Box, Grid } from '@mui/material';
import { ShoppingCart, AccountCircle, Search, DvrOutlined } from '@mui/icons-material';
import "../styles/header.scss"

interface HeaderProps {
    logo: React.ReactNode; // Imagen personalizado para el logo
    cartItemCount?: number; // Cantidad de items en el carrito
  }

  function Header ({logo, cartItemCount = 0 }: HeaderProps) {
    return (
      <AppBar position="static" color="primary" className="header">
        <Toolbar className='header-toolbars'>
          <Grid container xs={12}>
            <Grid item xs={1}>
              <Avatar alt="logo" src={logo as string}/>
            </Grid>
            <Grid item xs={9}>
              <Box className="search">
                <Box className="searchIcon">
                  <Search />
                </Box>
                <Box sx={{width: 200}}>
                  <InputBase
                    placeholder="Buscar…"
                    classes={{
                      root: 'inputRoot',
                      input: 'inputInput',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
            <Box className="sectionDesktop">
            <IconButton color="inherit">
              <Badge badgeContent={cartItemCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
            </Grid>
          </Grid>
         
        </Toolbar>
    </AppBar>
    );
  }

  export default Header