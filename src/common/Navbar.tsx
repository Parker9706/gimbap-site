import React, {useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button, Drawer } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import {Link as RouterLink} from 'react-router-dom';

export default function Navbar () {

  const [mobileView, setMobileView] = useState(false);
  const [hamburgerOpen, setHamburger] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());

    }
  }, []);

  const displayDesktop = () => {
    return (
      <div>
        <Link component={RouterLink} to='/demo'>
          <Button style={{color: '#655D5D'}} variant="text">Demo</Button>
        </Link>
        <Link component={RouterLink} to='/documentation'>
          <Button style={{color: '#655D5D'}} variant="text">Documentation</Button>
        </Link>
      </div>
    );
  };

  const displayMobile = () => {
    //we create functions handle click actions...
    //const openHamburger = ()=> setHamburger(true);
    //const closeHamburger = ()=> setHamburger(false);
    // const toggleHamburger = ()=> setHamburger(!hamburger);

    const handleDrawerOpen = () => setHamburger(true);
    const handleDrawerClose = () => setHamburger(false);

    return (
      <div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            // onClick: toggleHamburger
            onClick: handleDrawerOpen,
          }}
        >
        <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: hamburgerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Stack spacing={1} justifyContent="center" alignItems="center">
            <Link component={RouterLink} to='/demo'>
              <Button>Demo</Button>
            </Link>
            <Link component={RouterLink} to="/documentation">
              <Button>Document</Button>
            </Link>
          </Stack>
        </Drawer>
      </div>
    );
  };

  return (
    <div className="dark" id="navbar">
      <Link component={RouterLink} to='/' underline='none'>
        <div className="logo">gimbap</div>
      </Link>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  )
}