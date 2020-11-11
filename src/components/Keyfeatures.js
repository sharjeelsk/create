import React from 'react'

const Keyfeatures = ({firstcolimg,secondcolimg,thirdcolimg,firstcolh2,firstcolp,secondcolh2,secondcolp,thirdcolh2,thirdcolp}) => {
    return (
           
            <div>
                <div class="row">
                    <div class="col-md-4 keys">
                            
                            <img class="keysImg" src = {firstcolimg} alt="png"></img>
                            <h2 class="keystitle">{firstcolh2}</h2>
                            <p >{firstcolp}</p>
                            
                            
                    </div>
                    <div class="col-md-4 keys">
                            
                            <img class="keysImg" src = {secondcolimg} alt="png"></img>
                             <h2 class="keystitle">{secondcolh2}</h2>
                             <p>{secondcolp}</p>
                           
                             
                    </div>
                    <div class="col-md-4 keys">
                           
                            <img class="keysImg" src = {thirdcolimg} alt="png"></img>
                            <h2 class="keystitle">{thirdcolh2}</h2>
                            <p>{thirdcolp}</p>
                            
                            
                    </div>
            </div>
           </div>
            
            
        
    );
}

export default Keyfeatures;

 