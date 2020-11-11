import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import user from '../images/user.png'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
import _ from 'lodash'
const AddExchange = () => {
  const [state,setState]=useState([])
  const history = useHistory();
  const getUsers = async () => {

    console.log(Cookies.get())
    console.log(_.isEmpty(Cookies.get()))
    if(_.isEmpty(Cookies.get())){
      history.push("/signup")
    }
    else{
      console.log("is present")
     
    }
   };
 
   useEffect(() => {
    getUsers();
   }, []);
    return (
        <div>
        <Navbar />
        <Navbar2 />
           <div class="ui grid container">
                <div class="row">
                    <div class="center aligned four wide column">
                    <div class="ui card">
  <div class="image">
    <img src={user} />
  </div>
  <div class="content">
    <h5 class="header">Welcome, Kristy</h5>
    <div class="meta">
    </div>
    <div class="description">
      Points: 10
    </div>
  </div>
  <div class="extra content">
    <button class="ui fluid button">Logout</button>
  </div>
</div>
                    </div>
                    <div class="ui center aligned twelve wide column segment">
                            <h1>Add Pages</h1>
                            <div class="ui clearing divider"></div>
                            <h3>Facebook <i class="facebook icon"></i></h3>
  <Link to={`/addform/Like$blue&facebook`} class="ui inverted primary button"> <i class="thumbs up outline icon"></i> Like</Link>
  <Link to={`/addform/Following$blue`}  class="ui inverted primary button"><i class="user plus icon"></i> Following               </Link>
  <Link to={`/addform/Comment$blue`} class="ui inverted primary button"> <i class="comment alternate outline icon"></i> Comment</Link>
  <Link to={`/addform/Share$blue`} class="ui inverted primary button"> <i class="share icon"></i> Share                      </Link>
  <Link to={`/addform/Video$blue`} class="ui inverted primary button"> <i class="video icon"></i> Video                      </Link>
  <div class="ui clearing divider"></div>




                            <h3>YouTube <i class="youtube icon"></i></h3>
                        
                            <Link class="ui inverted red button " to={`/addform/like$red`}><i class="thumbs up outline icon"></i> Like</Link>
  <Link class="ui inverted red button" to={`/addform/Subscribe$red`}> <i class="youtube square icon"   ></i> Subscribe</Link>
  <Link class="ui inverted red button"to={`/addform/Comment$red`}><i class="comment alternate outline icon"></i>  Comment</Link>
  <Link class="ui inverted red button"to={`/addform/Share$red`}> <i class="share icon"></i> Share</Link>
  <Link class="ui inverted red button"to={`/addform/Video$red`}>  <i class="video icon"></i>  Video</Link>
  <div class="ui clearing divider"></div>



  <h3>Twitter <i class="twitter icon"></i></h3>
  <Link class="ui inverted primary button"> <i class="thumbs up outline icon"></i> Like</Link>
  <Link class="ui inverted primary button"><i class="user plus icon"></i> Following</Link>
  <Link class="ui inverted primary button"> <i class="comment alternate outline icon"></i> Comment</Link>
  <Link class="ui inverted primary button"> <i class="share icon"></i> Share</Link>
  <Link class="ui inverted primary button"> <i class="video icon"></i> Video</Link>
  <div class="ui clearing divider"></div>



  <h3>TikTok <i class="tiktok icon"></i></h3>
  <Link class="ui inverted secondary button" to={`/addform/Like$grey`}  > <i class="thumbs up outline icon"></i> Like</Link>
  <button class="ui inverted secondary button"><i class="user plus icon"></i> Following</button>
  <button class="ui inverted secondary button"> <i class="comment alternate outline icon"></i> Comment</button>
  <button class="ui inverted secondary button"> <i class="share icon"></i> Share</button>
  <button class="ui inverted secondary button"> <i class="video icon"></i> Video</button>
  <div class="ui clearing divider"></div>

  <h3>Instagram <i class="instagram icon"></i></h3>
  <button class="ui inverted pink button"> <i class="thumbs up outline icon"></i> Like</button>
  <button class="ui inverted pink button"><i class="user plus icon"></i> Following</button>
  <button class="ui inverted pink button"> <i class="comment alternate outline icon"></i> Comment</button>
  <button class="ui inverted pink button"> <i class="share icon"></i> Share</button>
  <button class="ui inverted pink button"> <i class="video icon"></i> Video</button>
  <div class="ui clearing divider"></div>


  <h3>Josh <i class="josh icon"></i></h3>
  <button class="ui inverted purple button"> <i class="thumbs up outline icon"></i> Like</button>
  <button class="ui inverted purple button"><i class="user plus icon"></i> Following</button>
  <button class="ui inverted purple button"> <i class="comment alternate outline icon"></i> Comment</button>
  <button class="ui inverted purple button"> <i class="share icon"></i> Share</button>
  <button class="ui inverted purple button"> <i class="video icon"></i> Video</button>
  <div class="ui clearing divider"></div>

                            <h3>Web <i class="chrome icon"></i></h3>
                            <button class="ui inverted orange button"> <i class="chrome icon"></i>Add a website</button>
                    </div>
                </div>
           </div>
           <Footer />
        </div>
    );
}

export default AddExchange;