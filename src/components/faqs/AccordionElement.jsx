import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { Typography, makeStyles, Grid } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import axios from 'axios'

const questionsImport = 'faqs.json'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px'
  }
}))

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    borderRadius: '10px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#FBCEB1',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    },
    borderRadius: '5px'
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(251,206,177,0.3)'
  }
}))(MuiAccordionDetails)

const AccordionElement = () => {
  const classes = useStyles()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    (async () => {
      const detailedQuestions = await axios.get(questionsImport)
      setQuestions(detailedQuestions.data)
    })()
  }, [])

  return (
    <div className={classes.root}>
      {questions.map((element) => {
        const id = element.id
        return (
          <Grid container key={id}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
              <Accordion>
                <AccordionSummary aria-controls="panelcontent" id="panel-header" expandIcon={<ExpandMoreIcon />}>
                  <Typography>{element.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {element.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        )
      })}
      {/* <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  )
}

export default AccordionElement
