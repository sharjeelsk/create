import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import form from '../images/form.png'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Redirect} from 'react-router'
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignUp = (props) => {

    const [state,setState]=useState("")
    const history = useHistory();
    const {handleSubmit,register,errors}=useForm()
    const onSubmit=async ({username,password})=>{
        const response=await axios.post("http://localhost:3001/user/signup",{username,password})
    
        Cookies.set(`user`,{loginuser:`${username}`})
        console.log(Cookies.get('user'))
        history.push("/")
    
        
     
    }
    return (
        <div>
        <Navbar />
        <Navbar2 />
        <div class="ui segment container" >
            
<h1 class="ui center aligned huge header">SignUp</h1>
            <div class="row">
                <div class="col-md-6">
                    
                <img src={form} style={{width:500}}/>
                
                </div>
               
                <div class="col-md-6">
                    
                <form class="ui raised segment form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div class="field">
                        <label class="ui red ribbon label" style={{marginRight:1300}}>Email</label>
                        <input 
                        
                        name="username"
                        type="text" 
                        placeholder="Enter Your Email" 
                        ref={register({
                            required:"Required"
                        })} />
                     
                    </div>
                    <div class="field">
                        <label class="ui red ribbon label" style={{marginRight:1300}}>Password</label>
                        <input name="password" type="password" placeholder="Enter Your Password" 
                        ref={register({required:"PASSWORD HAS SOME ERROR",
                                        minLength:8
                    })} 
                        />
                        {errors.password&&<div class="ui pointing red basic label">
      Your password must be 6 characters or more
    </div>}
                    </div>
                    
                    <button class="ui button" type="submit" >Submit</button>
                   
                    </form>
                    <Link to={`/signin`} class="ui center aligned container" id="signinlink">Already a user signin instead</Link>
                    <div style={{marginTop:5}}>{state!==''?<div class="ui red message">User Already Exists, LogIn instead</div>:''}</div>


                </div>
               
            </div>
        </div>   
        <Footer />         
        </div>
        );
}

export default SignUp;