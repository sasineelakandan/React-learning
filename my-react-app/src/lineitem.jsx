import React from 'react'
import { FaTrash } from "react-icons/fa"
const Lineitem = ({item,handlecheck,handledelete}) => {

  return (
    <div>
        <li className='item' key={item.id} ><input type="checkbox" onChange={()=>{handlecheck(item.id)}} checked={item.cheked} />
        <label > {item.item} </label>
        <FaTrash  onClick={()=>{handledelete(item.id)}} role='button' tabIndex='0' />
        </li>
        
    </div>
  )
}

export default Lineitem