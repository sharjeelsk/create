import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import _ from 'lodash'
import { useHistory } from 'react-router-dom';
const Navbar = ({active,active1,active2,active3,active4}) => {

  const history = useHistory();
  const [state,setState]=useState('SignUp')
  console.log(state)
  useEffect(() => getCookie())
   const getCookie=()=>{
     console.log(Cookies.get())
    if(_.isEmpty(Cookies.get())){
      setState('SignUp')
    }
    else{
      setState('Log out')
     
    }
   }
   const callback=()=>{
    Cookies.remove('user')
    Cookies.remove('platform')
    
    history.push('/')
   }
  return (

 
 <div class="ui right aligned grid inverted segment" style={{marginBottom:0,marginTop:0,borderRadius:0}}>
  <div class="left floated right aligned six wide column">
  <div class="ui inverted secondary pointing menu">
    <Link class={`${active} item`} to="/">
      Home
    </Link>
    <Link class={`${active1} item`} to="/aboutus">
      About Us
    </Link>
    <Link class={`${active2} item`}  to="/privacy">
      Privacy
    </Link>
    <Link class={`${active3} item`}  to="/terms">
      T&C
    </Link>
    <Link class={`${active4} item`}  to="/contact">
      Contact
    </Link>
    </div>
  </div>
  <div class="right floated left aligned six wide column">
    <div class="ui right aligned container">
    <button class="ui inverted button" to="/signup" onClick={()=>state==='SignUp'?history.push('/signup'):callback()} >{state}</button>
    </div>
  </div>
  </div>
 
 
 
 );
}

export default Navbar;