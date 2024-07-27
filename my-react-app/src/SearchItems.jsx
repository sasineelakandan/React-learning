import React from 'react'

const SearchItems = ({searchItem,setsearchItem}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault} >
     <input 
     id='search'
     type="text" 
       role='searchbox'
       placeholder='Search Items'
       value={console.log('value',searchItem)}
       onChange={(e)=>setsearchItem(e.target.value)}
     />
    </form>
  )
}

export default SearchItems