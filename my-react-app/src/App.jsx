
import './App.css'
import Contant from './Contant'
import Footer from './Footer'
import { useState } from 'react'
import Header from './Header'
import Additem from './Additem'

function App() {
  const [items,setitem]=useState([
    {id:1,cheked:true,item:'Go to the Gym Morning'},
    {id:2,cheked:false,item:'Go to the Hub Morning'},
    {id:3,cheked:false,item:'Return to the Hub Evenig'}
  ])
  const [newItem,setnewItem]=useState('')

  function addItem(item){
   const id=items.length? items[items.length-1].id+1:1
   console.log('new',id)
   const addNewItem={id,cheked:false,item}
   const listItems=[addNewItem,...items]
   console.log('new',listItems)
   setitem(listItems)
  }
  function handlecheck(id){
   const listItems=items.map((item)=>item.id===id ? {...item,cheked:!item.cheked}:item)
   
   setitem(listItems)
  }
  function handledelete(id){
  const listItems=items.filter((item)=>item.id!==id)
  setitem(listItems)
  }
  function handleevent(e){
    e.preventDefault()
    if(!newItem) return ''
    addItem(newItem)
    setnewItem('')
  }
  return (
  <div className='App' >
    <Header />
    <Additem 
    newItem={newItem}
    setnewItem={setnewItem}
    handleevent={handleevent}
    />
    <Contant items={items} handlecheck={handlecheck} handledelete={handledelete} />
    <Footer length={items.length} />
    </div>  
  )
}

export default App
