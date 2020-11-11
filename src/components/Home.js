import React,{useEffect} from 'react'
import './styles.css'
import tag from '../images/tag.png'
import message from '../images/message.png'
import notepad from '../images/notepad.png'
import Keyfeatures from './Keyfeatures'
import free from '../images/free.png'
import youtube from '../images/youtube.png'
import checked from '../images/checked (1).png'
import premium from '../images/premium.png'
import simple from '../images/website.png'
import call from '../images/phone-call.png'
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar2'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
const Home = () => {

  
    useEffect(() => {
      
      getCook()
    }, [])

    const getCook=async ()=>{
      console.log("home",Cookies.get())
    }
  return (
        <div>
     <Navbar active="active" active1='' active2='' active3='' active4='' />
        <Navbar2 />
        <div class="ui tertiary inverted segment" style={{marginTop:0,paddingBottom:200,borderRadius:0}} id="containersegment">
                      <h2 class="ui huge center aligned icon header" style={{marginTop:100}}>
                <i class="circular users icon"></i>
                <h1 class="ui huge black header" id="header">BOOST YOUR CHANNEL'S GROWTH TODAY</h1>
              </h2>
              <h2 class="ui center aligned large header container" id="content" style={{color:"#ebebeb"}}>Our simple network allows you to gain YouTube subscribers and likes for your channel. Excellent paid options for effortless growth are also available.
              </h2>
              <div class="ui container">
              <div class="ui center aligned inverted secondary segment" style={{paddingBottom:50}}>
                <h1 class="ui large header" style={{marginTop:10}} id="header">REGISTER NOW AND GET 50 POINTS ABSOLUTELY FREE !  </h1>
                <Link class="negative ui button" to="/signup">Register Now<i class="angle double right icon"></i></Link>
                </div>
              </div>
</div>


<div class="container" style={{marginTop:80}}>
  <div class="row">
    <div class="col-md-6 col">
      <img className='image' src={tag}></img>
    </div>
    <div class="col-md-6 col">
    <h2 id="header">it's free to use</h2>
       <p id="content">SubFill offers an innovative network 
           that allows you to quickly and easily
            receive 10 free YouTube Subscribers 
            and 10 free YouTube Likes every 12 hours!
            Paid plans are available, but the free plans are
             still very effective at growing your channel. 
             You do not need to log into your YouTube account 
             to access our website, keeping your YouTube channel 
             information safe and secure.</p>
    </div>
      </div>


  <div class="row">
      <div class="col-md-6 col">
          <h2 id="header">it's simple to use</h2>
           <p id="content"> SubFill was designed to be as simple as humanly possible! Your time is important and we understand that. To receive free YouTube subscribers and likes, simply like and subscribe to 20 other channels. You will gain your subscribers within 12 hours and can repeat this process every 12 hours for continuous growth.
           </p>
       </div>
      <div class="col-md-6 col">
           <img className='image' src={message}></img>
       </div>
  </div>


  <div class="row">
      <div class="col-md-6 col">
         <img className='image' src={notepad}></img>
       </div>
       <div class="col-md-6 col">
        <h2 id="header">you can see immediate results</h2>
        <p id="content">When you activate a free or paid plan, you will see your subscribers start increasing immediately. Manually activate a free plan every 12 hours, or activate a 100% automatic paid plan. Activate a paid plan and automatically receive subscribers every day!</p>
      </div>
    </div>
    
</div>

<div class="container">
<h1 id="header" class="ui center aligned header" style={{marginTop:300}}>Key Features & Benefits</h1>

<Keyfeatures 
      firstcolimg={free}
      firstcolh2="free to use"
      firstcolp="If you don’t mind taking a few minutes each day to activate a plan, we offer excellent options that deliver up to 10 free subscribers & 20 free YouTube likes per day"

      secondcolimg={youtube}
      secondcolh2="youtube com"
      secondcolp="YouTubers like yourself are using this exchange service to gain subscribers back and forth between other YouTubers."
      
      thirdcolimg={checked}
      thirdcolh2="safe safe safe"
      thirdcolp="Sub Fill’s service is safe and secure! YouTube channels do not get penalized for using our service and we operate with privacy, security and strict confidentiality."
      
      />
      <Keyfeatures 

      firstcolimg={premium}
      firstcolh2="Premium Optjions"
      firstcolp="If you prefer to effortlessly and automatically gain YouTube subscribers and video likes each day, then we recommend a paid plan to receive zero-effort, daily growth!"

      secondcolimg={simple}
      secondcolh2="Simple to use"
      secondcolp="Our network was designed to be extremely basic and simple for everyone to use. Register an account, login and the rest is self-explanatory!"

      thirdcolimg={call}
      thirdcolh2="Friendly support"
      thirdcolp="Our friendly support team is here to help! Have a question, comment, or concern? We’re a simple email away and we respond to every inquiry within 24-72 hours."
      
      />
</div>
      
<div class="container-fluid">
<h1 class="ui center aligned header" style={{marginTop:300}}>Plan Options</h1>
  
  

  <Card />

</div>

<Footer />

        </div>        
    );
}

export default Home;