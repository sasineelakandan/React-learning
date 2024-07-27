import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additem = ({newItem,setnewItem,handleevent}) => {
  return (
    <div>
        <form className='addForm' onSubmit={handleevent}>
         
          <input 
          autoFocus
          id='addItem'
          
          placeholder='Add Items'
          required
          value={newItem}
          onChange={(e)=>setnewItem(e.target.value)}
          />
          <button type='submit'
          aria-label='Add Item'
         
          >
         <FaPlus/>
          </button>
        </form>
    </div>
  )
}

export default Additem