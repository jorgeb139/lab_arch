import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Trabajamos from './pages/Trabajamos'
import theme from './assets/styles/theme'
import Faqs from './pages/Faqs'
import Contacto from './pages/Contacto'

export default function App () {
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <Header/>
      <Switch>
        <Route exact from="/" render={props => <Inicio {...props} />} />
        <Route exact path="/nosotros" render={props => <Nosotros {...props} />} />
        <Route exact path="/trabajamos" render={props => <Trabajamos {...props} />} />
        <Route exact path="/contacto" render={props => <Contacto {...props} />} />
        <Route exact path="/faqs" render={props => <Faqs {...props} />} />
      </Switch>
      <Footer/>
    </Router>
  </ThemeProvider>
  )
}
