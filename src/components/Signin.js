import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import form from '../images/form.png'
import {useForm} from 'react-hook-form'
import Navbar2 from './Navbar2'
import axios from 'axios'
import ViewExchange from './ViewExchange'
import Footer from './Footer'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Signin = (props) => {
    const history = useHistory();
//     const cookies = new Cookies();
//     cookies.set('myCat', 'Pacman', { path: '/' });
// console.log(cookies.get('myCat'));
    //<div class="ui vertical divider">Or</div>
    const {handleSubmit,register,errors}=useForm()
    const [err,setErr]=useState({error:'',classnam:''})
    // http://localhost:3001/user
    // {
    //     "username": "q@q.com"
    // }
    

    const onSubmit=async ({username,password})=>{
            // console.log(props)
            const response=await axios.post("http://localhost:3001/user/signin",{username,password})
            console.log(response)
            Cookies.set(`user`,{loginuser:`${username}`})
            history.push("/")
  
        
            if(response){
                props.history.push("/")
            }
//             if(response){
//                 console.log(response)
//                 setState(prev=>[...prev,response])
//                 console.log(state)
//             }        else{
//                 console.log('bada error')
//             }
// 
            

    //  const helper=()=>{
    //      console.log(state)
        // if(response.data.error==='not found user'){
                
        //     setErr({error:"Invalid email or password",classnam:"ui negative message"})
        //     } else if(response.data.gotUser.email=== email && response.data.gotUser.password=== password){
        //         // let value=props.match.url.length
        //         // console.log(value)
        //         let value=props.match.params.loginname
        //         console.log(value)
        //         props.history.push(`/`)
        //     }
    }
    
     
      

    
    return (
        <div>
            <Navbar />
            <Navbar2 />
            <div class="ui segment container" >
                
    <h1 class="ui center aligned huge header">LogIn</h1>
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
                            {errors.password&& <div class="ui pointing red basic label" style={{paddingBottom:10}}>Password should be of minimum length 8</div>}
                        </div>
                        
                        <button class="ui button" type="submit" >Submit</button>
                        </form>
                    <div class={`${err.classnam}`}>{err.error}</div>
                
                        </div>
                        </div>
                       
                            </div>
                            <Footer />
               </div>)
}
export default Signin;