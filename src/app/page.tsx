'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Icon from '@mui/material/Icon';
import { Carousel } from 'react-responsive-carousel';

const pages = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <main className="h-screen w-screen bg-[#151518]">
      <AppBar color='transparent' position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Trinity
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
              <div className='flex items-center justify-center'>
                <IconButton className='bg-slate-400' color='error' size="large">
                  <Icon>call</Icon>
                </IconButton>
                <div>
                  <span>Call us anytime</span>
                  <h4>+1 111 111 111</h4>
                </div>
              </div>
              <div className='w-[1px] h-[30px] bg-slate-400 mx-2' />
              <Button color='error' startIcon={<Icon>arrow_forward</Icon>} variant="contained">FREE ESTIMATE</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <section>
          <Carousel showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true}> 
              <div> 
                  <img  src="/images/cover.jpg" alt="image1"/> 
                  <div className='absolute top-0 h-full w-full flex items-center justify-center'>
                    <div>
                      <h2>Hello world</h2>
                    </div>
                  </div> 
              </div> 
              <div> 
                  <img  src="/images/cover.jpg" alt="image2" /> 
                  <div className='absolute top-0 h-full w-full flex items-center justify-center'>
                    <div>
                      <h2>Hello world</h2>
                    </div>
                  </div> 
              </div> 
              <div> 
                  <img  src="/images/cover.jpg"alt="image3"/> 
                  <div className='absolute top-0 h-full w-full flex items-center justify-center'>
                    <div>
                      <h2>Hello world</h2>
                    </div>
                  </div> 
              </div> 
              <div> 
                  <img  src="/images/cover.jpg" alt="image4"/> 
                  <div className='absolute top-0 h-full w-full flex items-center justify-center'>
                    <div>
                      <h2>Hello world</h2>
                    </div>
                  </div> 
              </div> 
              <div> 
                  <img  src="/images/cover.jpg" alt="image5"/> 
                  <div className='absolute top-0 h-full w-full flex items-center justify-center'>
                    <div>
                      <h2>Hello world</h2>
                    </div>
                  </div> 
              </div> 
          </Carousel> 
        </section>
        <section className='relative flex space-x-28 justify-center items-center'>
            <article className='h-72 w-72 bg-gray-950 border-t-red-600 border-t-8'>

            </article>
            <article className='h-72 w-72 bg-gray-950 border-t-red-600 border-t-8'>

            </article>
            <article className='h-72 w-72 bg-gray-950 border-t-red-600 border-t-8'>

            </article>
        </section>
      </div>
    </main>
  );
}
