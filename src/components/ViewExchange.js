import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import user from '../images/user.png'
import Footer from './Footer'
import axios from 'axios'
import Cookies from 'js-cookie'
import _ from 'lodash'
import { withRouter } from 'react-router-dom';
import List from './list'



  // const renderList= list.map(
  //   (item)=><li key={item.id} class="item"><a onClick={()=>setList1('click')} style={{marginLeft:10}} class="" href="https://www.youtube.com/c/ScoopWhoopUnscripted" target="_blank">{item}</a></li>
  //   )
    class ViewExchange extends React.Component{ 
      state={list:[],refresh:false}
      componentWillMount(props){
    
        if(_.isEmpty(Cookies.get())){
         this.props.history.push("/signup")
        }
        else{

        let platform = Cookies.get('platform')
 
        axios.post('https://subfillapi.herokuapp.com//viewexchange',{platform})
        .then(res=>{
          console.log(res)
          this.setState({list:res.data})
          
        })
        

        }
      }

renderList=()=>{
  console.log("in method")
return this.state.list.map((item,key)=>{
let di=item
  return <div key={key}>{di._id}</div>
})
}
 render(){

      return (
        <div>
          
          <Navbar />
          <Navbar2 />
          <h1 class="ui red center aligned massive header" id="header">ViewExchange</h1>
          <div class="ui container raised segment">
          <div class="ui huge header red ribbon label">
          Dashboard
          </div>

     
              <div>
          {_.isEmpty(Cookies.get())?null:<List value={this.state.list} />}
          
                  </div>  
                  </div>

        </div>
    );
      }
}
export default withRouter(ViewExchange);