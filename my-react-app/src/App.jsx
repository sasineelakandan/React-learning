
import './App.css'
import Contant from './Contant'
import Footer from './Footer'
import { useState } from 'react'
import Header from './Header'
import Additem from './Additem'
import { useEffect } from 'react'
import SearchItems from './SearchItems'
function App() {
  const [items, setitem] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);
  const [newItem,setnewItem]=useState('')
  const [searchItem,setsearchItem]=useState('')
  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(items));
  }, [items]);


  function addItem(item){
   const id=items.length? items[items.length-1].id+1:1
   console.log('new',id)
   const addNewItem={id,cheked:false,item}
   const listItems=[...items,addNewItem]
   console.log('new',listItems)
   setitem(listItems)
  }
  function handlecheck(id){
   const listItems=items.map((item)=>item.id===id ? {...item,cheked:!item.cheked}:item)
   setitem(listItems) 
  localStorage.setItem("todo_list",JSON.stringify(listItems))
   
  }
  function handledelete(id){
  const listItems=items.filter((item)=>item.id!==id)
  setitem(listItems)
  localStorage.setItem('todo-list',JSON.stringify(listItems))
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
    <SearchItems 
    searchItem={searchItem}
    setsearchItem={setsearchItem}
    />
    <Contant items={items.filter((item)=>(item.item).toLowerCase().includes(searchItem.toLowerCase()))} handlecheck={handlecheck} handledelete={handledelete} />
    <Footer length={items.length} />
    </div>  
  )
}

export default App
