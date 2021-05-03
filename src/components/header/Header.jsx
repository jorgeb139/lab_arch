// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Slide from '@material-ui/core/Slide';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from "@material-ui/core/styles";
// import logo from '../assets/images/logo_blanco_largo_invertido2.png'
// import { Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   logo: {
//     maxWidth: "160px",
//     padding: "10px",
//   },
//   menu:{
//     textAlign: "right",
//   }
// }));

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
// };

// const Header = (props) => {
//   const classes = useStyles();
//   const { history } = props;

//   const handleMenuClick = (pageURL) => {
//     history.push(pageURL);
//   };

//   return (
//     <div >
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar color="primary">
//           <Toolbar>
//             <img src={logo} alt="lab_arch" className={classes.logo}/>
//             <div className={classes.root}>
//               <Button color="secondary">Inicio</Button>
//               <Button color="secondary">Nosotros</Button>
//               <Button color="secondary">Nuestro proceso</Button>
//               <Button color="secondary">¿Trabajamos?</Button>
//               <Button color="secondary">Portafolio</Button>
//               <Button color="secondary">Contacto</Button>
//               <Button color="secondary">FAQ's</Button>
//             </div>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar/>
//     </div>
//   );
// }

// export default Header;

import React from 'react'
import { Hidden } from '@material-ui/core'

import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
  return (
        <div>
            <Hidden smDown>
              <HeaderDesktop/>
            </Hidden>
            <Hidden mdUp>
              <HeaderMobile/>
            </Hidden>
        </div>
  )
}

export default Header
