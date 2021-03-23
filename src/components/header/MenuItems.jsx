// import React, {useState} from 'react'
// import {  
//     MenuItem, 
// } from '@material-ui/core';

// const MenuItems = () => {
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     return (
//         <div>
//             <MenuItem onClick={handleClose}>Inicio</MenuItem>
//             <MenuItem onClick={handleClose}>Nosotros</MenuItem>
//             <MenuItem onClick={handleClose}>Nuestro proceso</MenuItem>
//             <MenuItem onClick={handleClose}>¿Trabajamos?</MenuItem>
//             <MenuItem onClick={handleClose}>Portafolio</MenuItem>
//             <MenuItem onClick={handleClose}>Contacto</MenuItem>
//             <MenuItem onClick={handleClose}>FAQ's</MenuItem>
//         </div>
//     )
// }

// export default MenuItems

const MenuItems = [
    {
      menuTitle: "Inicio",
      pageURL: "/",
    },
    {
      menuTitle: "Nosotros",
      pageURL: "/nosotros",
    },
    {
      menuTitle: "Nuestro proceso",
      pageURL: "/proceso",
    },
    {
      menuTitle: "¿Trabajamos?",
      pageURL: "/trabajamos",
    },
    {
    menuTitle: "Contacto",
    pageURL: "/contacto",
    },
    {
    menuTitle: "Portafolio",
    pageURL: "/portafolio",
    },
    {
    menuTitle: "FAQ's",
    pageURL: "/faqs",
    },
  ];

  export default MenuItems;