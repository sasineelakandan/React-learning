import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa"
  
const Contant = () => {
  const [items,setitem]=useState([
    {id:1,cheked:true,item:'Go to the Gym Morning'},
    {id:2,cheked:false,item:'Go to the Hub Morning'},
    {id:3,cheked:false,item:'Return to the Hub Evenig'}
  ])
  function handlecheck(id){
   const listItems=items.map((item)=>item.id===id ? {...item,cheked:!item.cheked}:item)
   console.log(listItems)
   setitem(listItems)
  }
  function handledelete(id){
  const listItems=items.filter((item)=>item.id!==id)
  setitem(listItems)
  }
  return (
    
    <main> 
    <ul>
      {items.map((item)=>
        <li className='item' key={item.id} ><input type="checkbox" onChange={()=>{handlecheck(item.id)}} checked={item.cheked} />
        <label > {item.item} </label>
        <FaTrash  onClick={()=>{handledelete(item.id)}} role='button' tabIndex='0' />
        </li>
        
      )}
      
    </ul>
      </main>
  )
}

export default Contant