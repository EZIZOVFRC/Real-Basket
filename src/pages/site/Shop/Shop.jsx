import React, { useContext } from 'react'
import MainContext from '../../../context/Context'

function Shop() {
  const {data,loading}=useContext(MainContext)
  return (
    <div>
      shop
    </div>
  )
}

export default Shop
