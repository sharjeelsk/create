import React from 'react'
import _ from 'lodash'
const list = ({value}) => {
    console.log(value)
let array = []
let items = value.map(item=>{
array.push(item.url)
console.log(array)
})
let element = array.map(e=><li><a href={e}>{e}</a></li>)
    return (
        <div>
    {/* {array.toString()} */}
        {element}
        </div>
    );
}

export default list;
// {
//     value.forEach(function(item, index, array) {
//       console.log(item, index)
//     })
//     }