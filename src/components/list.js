import React from 'react'
import _ from 'lodash'
import Table from './Table'
const list = ({value}) => {
    console.log(value.length)
    let tablerow=value.map((item)=><ol></ol>)
let array = []
let array2=[]
let array3=[]

let items = value.map(item=>{
    console.log(item.url)
  return  <Table element={item.url} type={item.type} platform ={item.platform} />

array.push(item.url)
console.log(array)
})
value.map((item)=>{
    array2.push(item.type)
})
value.map((item)=>{
    array3.push(item.platform)
})
let element = array.map(e=><li><a href={e}>{e}</a></li>)
let type= array2.map(e=><li>{e}</li>)
let platform=array3.map(e=><li>{e}</li>)   
return (
        <div>
    {/* {array.toString()} */}
        <table class="ui celled table" style={{marginTop:30}}>
  <thead>
    <tr><th>OTHERS URL</th>
    <th>PLATFORM</th>
    <th>TYPE</th>
  </tr></thead>
  <tbody>
      {items}
  </tbody>
</table>
        </div>
    );
}

export default list;
// {
//     value.forEach(function(item, index, array) {
//       console.log(item, index)
//     })
//     }