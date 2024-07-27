import React, { useState } from 'react'
import Itemlist from './itemlist'

  
const Contant = ({items,handlecheck,handledelete}) => {
  
  return (
   
    <main> 
      {items.length?(
      <Itemlist 
       items={items}
       handlecheck={handlecheck}
       handledelete={handledelete}
      />
      ): <p id="todo-list" className="todo-list"></p>}
      </main>
  )
}

export default Contant