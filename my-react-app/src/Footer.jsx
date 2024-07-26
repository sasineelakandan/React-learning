import React from 'react'

const Footer = () => {
    let year=new Date()
  return (
    
    
    <div>
        <footer> Copy &copy; {year.getFullYear()}  </footer>
    </div>
  )
}

export default Footer