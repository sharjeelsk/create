import React from 'react'

const Footer = () => {
    return (
        <div class="ui grey inverted segment" style={{borderRadius:0,paddingBottom:100,marginTop:100}}>
            <h1 class="footerh1">Sub <span class="ui small red header">Fill</span></h1>
            <div class="ui divided grid" style={{marginLeft:700,marginRight:700,marginTop:40}}>
                <div class="center aligned four wide column">
                    facebook
                </div>
                <div class="center aligned four wide column">
                    Twitter
                </div>
                <div class="center aligned four wide column">
                    Insta
                </div>
                <div class="center aligned four wide column">
                    Linkedin
                </div>

            </div>

            <div class="ui center aligned container" style={{marginTop:30}}>Copyright 2020 Laravel. Developed by TechGeeks</div>
        </div>
    );
}

export default Footer;