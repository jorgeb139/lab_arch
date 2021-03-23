import React from 'react'
import {  
    makeStyles, 
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    footer: {
      backgroundColor: "black",
      height: "10vh",
      color: "white"
    },
  }));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className = {classes.footer}>
            hola
        </div>
    )
}

export default Footer
