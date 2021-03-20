import React from 'react'
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import img_inicio from '../../assets/images/portada_inicio.jpg';
import img_nosotros from '../../assets/images/portada_nosotros.jpg';
import img_proceso from '../../assets/images/portada_proceso.jpg';
import img_trabajamos from '../../assets/images/portada_trabajamos.jpg';
import img_contacto from '../../assets/images/portada_contacto.jpg';
import img_portafolio from '../../assets/images/portada_portafolio.jpg';
import img_faqs from '../../assets/images/portada_faqs.jpg';

const useStyles = makeStyles((theme) => ({
    Banner: {
      zIndex: -1,
      height: "80vh",
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    Inicio: {
        backgroundImage: `url(${img_inicio})`,
    },
    Nosotros: {
        backgroundImage: `url(${img_nosotros})`,
    },
    Proceso: {
        backgroundImage: `url(${img_proceso})`,
    },
    Trabajamos: {
        backgroundImage: `url(${img_trabajamos})`,
    },
    Contacto: {
        backgroundImage: `url(${img_contacto})`,
    },
    Portafolio: {
        backgroundImage: `url(${img_portafolio})`,
    },
    Faqs: {
        backgroundImage: `url(${img_faqs})`,
    },
}));

const Banner = ({bannerId}) => {
    const classes = useStyles();

    return (
        <div className={clsx(
            classes.Banner,
            {
                [classes.Inicio]: bannerId === "Inicio",
                [classes.Nosotros]: bannerId === "Nosotros",
                [classes.Proceso]: bannerId === "Proceso",
                [classes.Trabajamos]: bannerId === "Trabajamos",
                [classes.Contacto]: bannerId === "Contacto",
                [classes.Portafolio]: bannerId === "Portafolio",
                [classes.Faqs]: bannerId === "Faqs",
            },
        )} >
        </div>
    )
};

export default Banner;
