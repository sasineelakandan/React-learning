import React from 'react'
import Lineitem from './lineitem'


const Itemlist = ({items,handlecheck,handledelete}) => {
   console.log(items)
  console.log(handlecheck)
  console.log(handledelete)
  return (
    <div>
       <ul>
        {items.map((item)=>(
           <Lineitem 
           item={item}
           key={item.id}
           handlecheck={handlecheck}
           handledelete={handledelete}
           />
       
        ))}
       </ul>
    
    </div>
  )
}

export default Itemlist