import React,{useState} from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Cryptr from 'cryptr'
import {useForm} from 'react-hook-form'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'
const AddForm = (props) => {
  const [state1,setState1]=useState('')
 // const history = useHistory();
  //console.log(history)
  const {register,handleSubmit,errors}=useForm()
    // const cryptr=new Cryptr("subfill")
    // let enc=cryptr.encrypt("hello")
    // let dec=cryptr.decrypt(enc)
    // console.log(enc)
    // console.log(dec)
  //   let str=escape("hello")
  //  // let str1=md5("hello")
  //  // console.log(str+str1)
  //   let strd=unescape(str)
  //   console.log(strd)
  let cookieobject= Cookies.get('user')
  cookieobject = JSON.parse(cookieobject)
  
  const onSubmit=async(data)=>{
  console.log(platform+name+data.url)
    Cookies.set('platform',`${platform}`)
    console.log("in submit")
    const response=await axios.post("https://subfillapi.herokuapp.com/user/addexchange",{
    username:cookieobject.loginuser,
    url:data.url,
    platform:platform,
     type:name,
    })
    if(response){
      setState1("Successfully Added")
    }
    else{
      setState1("sorry request failed")
    }
   
  }
   let str=props.match.url
   let a = str.split("/addform/")[1]
   let name=a.split("$")[0]
   console.log(name)
   a= str.split("$")[1]
   let platform = a.split("&")[1]
   let color = a.split("&")[0]
   console.log(platform + color)
    const [state,setState]=useState(false)
    console.log(state)
    return (
        <div>
            <Navbar />
            <Navbar2 />
    <div className="ui center aligned huge header"> Add URL for <span className={`ui ${color} header`}> {name}</span></div>
            <form className="ui raised segment container form" onSubmit={handleSubmit(onSubmit)}>
  <div className="field">
    <label class={`ui ${color} ribbon label`} style={{marginRight:1300}}>Enter URL</label>
    <input type="text" name="url" placeholder="URL" ref={register({required:true,minLength:8})} />
    {errors.url && <div class="ui pointing red basic label" style={{paddingBottom:10}}>Password should be of minimum length 8</div>}
  </div>
  
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" name="check" checked={state}
      onChange={()=>setState(!state)}
      />
    
      <label onClick={()=>setState(!state)}
      style={{cursor:'pointer'}}
      >I agree to the Terms and Conditions</label>
    </div>
  </div>
  
  <button className={`ui ${state===false?`disabled`:null} button`} type="submit">Submit</button>

</form>
{state1==='Successfully Added'?<div class="ui success message center aligned container">Successfully Added The URL <Link to="/viewexchange">Go To ViewExchange</Link></div>:null}

            </div>
      
       
    );
}

export default withRouter(AddForm);