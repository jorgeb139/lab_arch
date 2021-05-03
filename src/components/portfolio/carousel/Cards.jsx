import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import axios from 'axios'
import { useMotionValue, motion, useSpring, useMotionTemplate } from 'framer-motion'

const listProjects = 'Projects.json'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    minWidth: 'min-content'
  },
  card: {
    color: '#4D4D4D',
    width: '300px',
    margin: '20px'
  },
  media: {
    height: 250,
    '&:hover': {
      opacity: '0.5',
      transition: '0.5s ease'
    },
    transition: '0.5s ease'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat, sans-serif;',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  description: {
    fontFamily: 'Montserrat, sans-serif;',
    fontSize: '0.7rem'
  }
})

const Cards = () => {
  const classes = useStyles()
  const shadowX = useSpring(0)
  const shadowY = useMotionValue(0)
  const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 5px rgba(0,0,0,0.3))`

  const [projects, setProjects] = useState([])

  useEffect(() => {
    (async () => {
      const projects = await axios.get(listProjects)
      setProjects(projects.data)
    })()
  }, [])

  return (
    <motion.div
      className={classes.container}
      drag='x'
      dragConstraints = {{ left: -1300, right: 0 }}
      dragMomentum={true}
      dragTransition={{ stiffness: 300, damping: 600, mass: 3 }}
      style={{ filter: shadow }}
    >
      <motion.div className={classes.container}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id }>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={project.principalPicture}
                  title="Contemplative Reptile"
                  alt={classes.title}
                >
                </CardMedia>
                <CardContent>
                  <Typography className={classes.title}>
                    {project.tittle}
                  </Typography>
                  <Typography className={classes.description}>
                    <strong>Ubicación: </strong>
                    {project.ubication}
                  </Typography>
                  <Typography className={classes.description}>
                    <strong>Metros cuadrados: </strong>
                    {project.sqr_mts}
                  </Typography>
                  <Typography className={classes.description}>
                    <strong>Materialidad: </strong>
                    {project.materials}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </motion.div>
    </motion.div>

  // <Card className={classes.root}>
  //   <CardActionArea>
  //     <CardMedia
  //       className={classes.media}
  //       image={projects[0].principalPicture}
  //       title="Contemplative Reptile"
  //     />
  //     <CardContent>
  //       <Typography className={classes.title}>
  //         {projects[0].tittle}
  //       </Typography>
  //       <Typography className={classes.description}>
  //         <strong>Ubicación: </strong>
  //         {projects[0].ubication}
  //       </Typography>
  //     </CardContent>
  //   </CardActionArea>
  // </Card>
  )
}

export default Cards
