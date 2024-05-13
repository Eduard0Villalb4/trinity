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
import Carousel from 'react-multi-carousel';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';


const responsiveFirstCarousel = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const responsiveSecondCarousel = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

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
      <div className='pb-80'>
        <section>
          <Carousel 
            responsive={responsiveFirstCarousel} 
            infinite={true}
            swipeable={true}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
          > 
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
        <section className='relative flex space-x-28 justify-center items-center px-44'>
            <article className='h-72 flex-1 bg-gray-950 border-t-red-600 border-t-8'>

            </article>
            <article className='h-72 flex-1 bg-gray-950 border-t-red-600 border-t-8'>

            </article>
            <article className='h-72 flex-1 bg-gray-950 border-t-red-600 border-t-8'>

            </article>
        </section>
        <section className='flex px-44 mt-12'>
          <div className='flex-1 p-5'>
            <div className='bg-slate-200 w-full h-full'></div>
          </div>
          <div className='flex-1 flex flex-col space-y-6'>
              <div>
                <h3 className='sub-title'>About roofside</h3>
                <h2 className='title'>Experienced & quality roofing service providers</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat praesentium nesciunt dolore explicabo delectus dolores ea vero, alias, sequi unde dolorum illo est enim officia repudiandae eos? Tenetur, optio.</p>
              </div>
              <div className='flex space-x-5'>
                <div className='flex-1'>
                  <div>
                    <h6>Innovative work</h6>
                  </div>
                  <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, blanditiis rem necessitatibus nemo sed unde adipisci eaque cupiditate porro maxime tempore optio, voluptas ea quas accusamus eligendi! Voluptatum, quis dolore!</p>
                  </div>
                </div>
                <div className='flex-1'>
                  <div>
                    <h6>Innovative work</h6>
                  </div>
                  <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, blanditiis rem necessitatibus nemo sed unde adipisci eaque cupiditate porro maxime tempore optio, voluptas ea quas accusamus eligendi! Voluptatum, quis dolore!</p>
                  </div>
                </div>
              </div>
              <div>
                <Button color='error' startIcon={<Icon>arrow_forward</Icon>} variant="contained">FREE ESTIMATE</Button>
              </div>
          </div>
        </section>
        <section className='flex mt-12 flex-col px-44'>
          <div>
            <h3 className='sub-title'>Our Services</h3>
            <div className='flex space-x-5'>
              <h2 className='tite'>We`re providing quality roofing services</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat porro rem, sint animi a eos in repudiandae tempore obcaecati voluptatum qui id inventore sit, nihil dolorem, possimus laborum voluptate aut!</p>
            </div>
          </div>
          <div className='flex space-x-5'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/images/residential-roofing-700x400.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/images/residential-roofing-700x400.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/images/residential-roofing-700x400.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </section>
        <section className='flex px-44 mt-12'>
          <div className='flex-1 w-full'>
            <h3 className='sub-title'>Why choose us</h3>
            <h2 className='title'>Few reasons to choose our company</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolor dicta fugiat iste consequatur voluptatem eos quas odio non perspiciatis eum ullam est pariatur, dolores optio. Sit temporibus dicta iure.</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-blue-500 text-white p-4">1</div>
              <div className="bg-green-500 text-white p-4">2</div>
              <div className="bg-purple-500 text-white p-4">3</div>
              <div className="bg-yellow-500 text-white p-4">4</div>
            </div>
          </div>
          <div className='flex-1 p-5 w-full'>
            <div className='bg-slate-200 w-full h-full min-h-96'></div>
          </div>
        </section>

        <section className='flex px-44 mt-12'>
          <div className="overflow-x-auto whitespace-nowrap">
            <div className="inline-block px-4 py-2">
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
              <div className="w-64 h-auto bg-gray-200 inline-block mr-4 opacity-90">
                <img  src="/images/embato.png" alt="image1"/> 
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col px-44 mt-12'>
          <div className='flex flex-col w-full'>
            <div className='w-full text-center'>
              <h3 className='sub-title'>Lastest projects</h3>
              <h2 className='title'>Explore our latest projects <br /> for your inspiration</h2>
            </div>
          </div>
          <div className='w-full h-72'>
            <Carousel 
              className='w-full h-full'
              responsive={responsiveSecondCarousel} 
              infinite={true}
              swipeable={true}
              ssr={true} // means to render carousel on server-side.
              autoPlay={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
            >
              <div className='min-w-11 w-full p-2'>
                <img src="/images/residential-roofing-700x400.jpg" alt="" />
              </div>
              <div className='min-w-11 w-full p-2'>
                <img src="/images/residential-roofing-700x400.jpg" alt="" />
              </div>
              <div className='min-w-11 w-full p-2'>
                <img src="/images/residential-roofing-700x400.jpg" alt="" />
              </div>
              <div className='min-w-11 w-full p-2'>
                <img src="/images/residential-roofing-700x400.jpg" alt="" />
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    </main>
  );
}
