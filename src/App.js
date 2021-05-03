import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Inicio from './pages/Inicio'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function App () {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact from="/" render={props => <Inicio {...props} />} />
        {/* <Route exact path="/nosotros" render={props => <Prueba {...props} />} /> */}
      </Switch>
      <Footer/>
    </Router>
  )
}
