import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signin from './Signin'
import SignUp from './SignUp'

//https://www.youtube.com/watch?v=Y0-qdp-XBJg
import AboutUs from './AboutUs'
import Privacy from './Privacy'
import Terms from './Tc'
import Contact from './Contact'

import AddExchange from './AddExchange'
import Error from './error'

import ViewExchange from './ViewExchange'
import AddForm from './AddForm'
import axios from 'axios'


const App = () => {
  

    return (
      <BrowserRouter>

      <Route path="/" exact component={Home} />
      <Route path="/nav" component={Navbar} />
  
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={Signin} />
      

      <Route path="/aboutus" component={AboutUs} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route path="/addform/:name" component={AddForm} />
    <Route path="/addexchange" component={AddExchange} />
    <Route path="/viewexchange" component={ViewExchange} />
    <Route path="/error" component={Error} />

</BrowserRouter>
       
    );
}

export default App;
