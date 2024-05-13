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
      <div className="main-header__top">
                <div className="main-header__top-inner">
                    <div className="main-header__top-address">
                        <ul className="list-unstyled main-header__top-address-list">
                            <li>
                                <i className="icon">
                                    <span className="fa fa-clock"></span>
                                </i>
                                <div className="text">
                                    <p>Mon to Sat: 09:00 am to 05:00 pm</p>
                                </div>
                            </li>
                            <li>
                                <i className="icon">
                                    <span className="fa fa-envelope"></span>
                                </i>
                                <div className="text">
                                    <p><a href="mailto:trinity@company.com">trinity@company.com</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main-header__top-right">
                        <div className="main-header__top-menu-box">
                            <ul className="list-unstyled main-header__top-menu">
                                <li><a href="faq.html">Our Faqs</a></li>
                                <li><a href="contact.html">Pricing</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="main-header__top-social-box">
                            <div className="main-header__top-social">
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <AppBar color='transparent' position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <img className='w-28' src="/images/logo.png" alt="" />

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
                  <h4 className='text-white'>+1 111 111 111</h4>
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
        <section className="feature-one">
            <div className="px-44">
                <div className="feature-one__inner">
                    <div className="feature-one__dot">
                        <img src="/images/feature-one-dot.png" alt="" />
                    </div>
                    <div className="row flex space-x-3">
                        <div className="flex-1 col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{visibility: "visible", animationDelay: "100ms", animationName: "fadeInUp"}}>
                            <div className="feature-one__single !bg-[#121113]">
                                <div className="feature-one__top">
                                    <div className="feature-one__icon">
                                        <span className="icon-roof-5"></span>
                                    </div>
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title !text-white"><a className='!text-white' href="about.html">Quality <br /> materials</a></h3>
                                    </div>
                                </div>
                                <div className="feature-one__single-inner">
                                    <p className="feature-one__text">Nullam neque augue, maximus id nulla id, dignissim tristique nunc.</p>
                                    <div className="feature-one__read-more">
                                        <a className='!text-white' href="about.html">Read More <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
          
                        <div className="flex-1 col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: "visible", animationDelay: "200ms", animationName: "fadeInUp"}}>
                            <div className="feature-one__single !bg-[#121113]">
                                <div className="feature-one__top">
                                    <div className="feature-one__icon">
                                        <span className="icon-construction-worker"></span>
                                    </div>
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title !text-white"><a className='!text-white' href="team.html">Professional <br /> workers</a></h3>
                                    </div>
                                </div>
                                <div className="feature-one__single-inner">
                                    <p className="feature-one__text">Nullam neque augue, maximus id nulla id, dignissim tristique nunc.</p>
                                    <div className="feature-one__read-more">
                                        <a className='!text-white' href="team-details.html">Read More <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
   
                        <div className="flex-1 col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: "visible", animationDelay: "300ms", animationName: "fadeInUp" }}>
                            <div className="feature-one__single !bg-[#121113]">
                                <div className="feature-one__top">
                                    <div className="feature-one__icon">
                                        <span className="icon-online-registration"></span>
                                    </div>
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title !text-white"><a className='!text-white' href="contact.html">Free <br /> estimates</a></h3>
                                    </div>
                                </div>
                                <div className="feature-one__single-inner">
                                    <p className="feature-one__text">Nullam neque augue, maximus id nulla id, dignissim tristique nunc.</p>
                                    <div className="feature-one__read-more">
                                        <a className='!text-white' href="contact.html">Read More <i className="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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


        <section className="!px-44 why-choose-one">
            <div className="why-choose-one-bg" style={{ backgroundImage: "url(/images//why-choose-one-bg.jpg)" }}></div>
            <div className="why-choose-one-shape-3 float-bob-y-2"></div>
            <div className="why-choose-one-shape-4 float-bob-x">
                <img src="/images/why-choose-one-shape-4.png" alt="" />
            </div>
            <div className="container">
                <div className="flex">
                    <div className="flex-1">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">Why choose us</p>
                                    <div className="section-title-shape-1">
                                        <img src="/images/section-title-shape-1.png" alt="" />
                                    </div>
                                </div>
                                <h2 className="section-title__title">Few reasons to choose our company</h2>
                            </div>
                            <p className="why-choose-one__text">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute aboris nisi ut aliquip ex irure reprehederit.</p>
                            <div className="why-choose-one__points-box">
                                <div className="flex flex-col space-y-2">
                                  <div className='flex-1 flex space-x-2'>
                                    <div className="flex-1 col-lg-6 col-md-6">
                                          <div className="why-choose-one__points-single">
                                              <div className="why-choose-one__points-icon">
                                                  <Icon>roofing</Icon>
                                              </div>
                                              <div className="why-choose-one__points-title-box">
                                                  <h4 className="why-choose-one__points-title">Quality <br /> materials</h4>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="flex-1 col-lg-6 col-md-6">
                                          <div className="why-choose-one__points-single">
                                              <div className="why-choose-one__points-icon">
                                                  <Icon>shield</Icon>
                                              </div>
                                              <div className="why-choose-one__points-title-box">
                                                  <h4 className="why-choose-one__points-title">Fully <br /> insured</h4>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='flex-1 flex space-x-2'>
                                    <div className="flex-1 col-lg-6 col-md-6">
                                      <div className="why-choose-one__points-single">
                                        <div className="why-choose-one__points-icon">
                                          <Icon>workspace_premium</Icon>
                                        </div>
                                        <div className="why-choose-one__points-title-box">
                                            <h4 className="why-choose-one__points-title">Mission <br /> statement</h4>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex-1 col-lg-6 col-md-6">
                                      <div className="why-choose-one__points-single">
                                          <div className="why-choose-one__points-icon">
                                            <Icon>engineering</Icon>
                                          </div>
                                          <div className="why-choose-one__points-title-box">
                                              <h4 className="why-choose-one__points-title">Expert <br /> engineers</h4>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="why-choose-one__right">
                            <div className="why-choose-one__img-box">
                                <div className="why-choose-one__img wow slideInRight animated" data-wow-delay="100ms" data-wow-duration="2500ms" style={{ visibility: "visible", animationDuration: "2500ms", animationDelay: "100ms", animationName: "slideInRight" }}>
                                    <img src="/images/why-choose-one-img-1.png" alt="" />
                                </div>
                                <div className="why-choose-one__shape-1"></div>
                                <div className="why-choose-one__shape-2"></div>
                                <div className="why-choose-one__author-sign">
                                    <p>Gabino Espinoza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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


        <section className="!px-44 mt-12 trust-company">
          <div className="trust-company-shape-1">
              <img src="/images/traust-company-shape-1.png" alt="" />
          </div>
          <div className="trust-company-shape-2"></div>
          <div className="trust-company-shape-3"></div>
          <div className="trust-company-shape-4"></div>
          <div className="trust-company-bg jarallax" data-jarallax="" data-speed="0.2" data-imgposition="50% 0%" style={{ backgroundImage: "none"}} data-jarallax-original-styles="background-image: url(assets/images/backgrounds/trust-company-bg.jpg);">
              <div style={{ position: "absolute", top: "0px", left: "11rem", width: "100%", height: "100%", overflow: "hidden", zIndex: "-100"}} id="jarallax-container-0">
                  <div style={{ backgroundPosition: "50% 50%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url(&quot;https://roofsie-html.vercel.app/main-html/assets/images/backgrounds/trust-company-bg.jpg&quot;)", position: "fixed", top: "0px", left: "0px", width: "1392px", height: "873px", overflow: "hidden", pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform, opacity", marginTop: "47.5px", transform: "translate3d(0px, -20.7px, 0px)" }}></div>
              </div>
          </div>
          <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="trust-company__left lg:col-span-6">
                      <div className="trust-company__video-link">
                          <a href="" className="video-popup">
                              <div className="trust-company__video-icon">
                                  <Icon>play_arrow</Icon>
                                  <i className="ripple"></i>
                              </div>
                          </a>
                      </div>
                      <h2 className="trust-company__title">Hundreds of customers trust our company</h2>
                  </div>
                  <div className="trust-company__right lg:col-span-5">
                      <ul className="list-none">
                          <li className="flex items-center">
                              <div className="icon">
                                  <span className="icon-tick"></span>
                              </div>
                              <div className="text">
                                  <p>We’ve expert & certified staff</p>
                              </div>
                          </li>
                          <li className="flex items-center">
                              <div className="icon">
                                  <span className="icon-tick"></span>
                              </div>
                              <div className="text">
                                  <p>We only provide quality services</p>
                              </div>
                          </li>
                          <li className="flex items-center">
                              <div className="icon">
                                  <span className="icon-tick"></span>
                              </div>
                              <div className="text">
                                  <p>We offer you free estimates</p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </section>

        <section className='flex mt-12 flex-col px-44'>
          <div>
            <h3 className='sub-title'>testimonials</h3>
            <div className='flex space-x-5'>
              <h2 className='tite'>What they’re talking about us</h2>
            </div>
          </div>
        </section>


        <section className='flex flex-col px-44 mt-12'>
          <div className='flex flex-col w-full'>
            <div className='w-full text-center'>
              <h3 className='sub-title'>News & Updates</h3>
              <h2 className='title'>Stay update with roofsie <br /> news & articles</h2>
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


      <footer className="site-footer">
            <div className="site-footer-img-1">
                <img src="/images/site-footer-img-1.png" alt="" />
            </div>
            <div className="site-footer-shape-1">
                <img src="/images/site-footer-shape-1.png" alt="" />
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: "visible", animationDelay: "100ms", animationName: "fadeInUp"}}>
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__about-text-box">
                                    <p className="footer-widget__about-text">Roofsie with more than two years of proven success in quality roofing services.</p>
                                </div>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: "visible", animationDelay: "200ms", animationName: "fadeInUp"}}>
                            <div className="footer-widget__column footer-widget__explore clearfix">
                                <h3 className="footer-widget__title">Explore</h3>
                                <ul className="footer-widget__explore-list list-unstyled clearfix">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="work.html">Recent Works</a></li>
                                    <li><a href="team.html">Our Team</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: "visible", animationDelay: "300ms", animationName: "fadeInUp"}}>
                            <div className="footer-widget__column footer-widget__newsletter clearfix">
                                <h3 className="footer-widget__title">Newsletter</h3>
                                <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in your inbox.</p>
                                <form className="footer-widget__newsletter-form">
                                    <div className="footer-widget__newsletter-input-box">
                                        <input type="email" placeholder="Enter Email Address" name="email" />
                                        <Button color='error' startIcon={<Icon>arrow_forward</Icon>} variant="contained">Subscribe</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: "visible", animationDelay: "400ms", animationName: "fadeInUp"}}>
                            <div className="footer-widget__column footer-widget__contact">
                                <h3 className="footer-widget__title">Contact</h3>
                                <p className="footer-widget__contact-text">asdasdasd asd asdasd</p>
                                <ul className="list-unstyled footer-widget__contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:trinity@company.com ">trinity@company.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="text">
                                          <p><a className='text-white' href="tel:9200368090">+1 111 111 111</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© All Copyright 2024 by Trinity inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </main>
  );
}
