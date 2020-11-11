import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
const AboutUs = () => {
    return (
        <div>
            <Navbar active='' active1="active" active2=""/>
                <Navbar2 />
                <div class="ui raised segment center aligned container" style={{marginTop:80}}>
                <h1 class="ui center aligned red header" id="header">About Us</h1>
                <div class="ui container">
                    <h2 class="ui  header" style={{marginTop:80}} id="header">Introduction</h2>
                    <p class = "para" id="content">
Sub Fill is a free social exchange network that helps you grow your social presence.
Thanks for joining Sub Fill. You can get more and more Facebook Likes, Facebook Share, Facebook Followers, Facebook Post Likes, Facebook Comment, Facebook Post Share, YouTube Subscribe, YouTube Video Likes and YouTube Views, YouTube Video Comment, and Web Site Hits (auto surf).
We allow you to look and choose who you want to subscribe/like/comment/ follow/view and skip those you are not interested in.
The Registration on Sub Fill is effortless and fast. We request only your real email address to send you the confirmation email and 50 points at the start during the registration.
Before starting using our service, all the users must read and accept our Terms and conditions.
</p>
<h2 class="ui  header" id="header">Additional Information</h2>

<p  class = "para" id="content">
    Sub Fill doesn't sell likes/subscriptions/followers/views/hits
    We will never request usernames or passwords of your social network accounts and will never post or update your account's status.
    The information on your account will never be reachable for the third party unless you agree. Only in selling any or all of our business to a third party will your information be shared.
    </p>
<p style={{marginTop:20}}>
For questions, further information, requests, or comments, please feel free to contact us via the support center.
</p>
</div>
                </div>
            <Footer />
            </div>
            
    );
}

export default AboutUs;