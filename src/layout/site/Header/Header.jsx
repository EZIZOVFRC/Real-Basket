
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import MainContext from '../../../context/Context'

function Header() {
  const {basketItems}=useContext(MainContext)
  return (
    <div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'shop'}>Shop</Link></li>
        <li><Link to={'basket'}>Basket {basketItems.length}</Link></li>
        
      </ul>
    </div>
  )
}

export default Header



