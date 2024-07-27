import React, { useState } from 'react'
import Itemlist from './itemlist'

  
const Contant = ({items,handlecheck,handledelete}) => {
  
  return (
    
    <main> 
      <Itemlist 
       items={items}
       handlecheck={handlecheck}
       handledelete={handledelete}
      />
      </main>
  )
}

export default Contant