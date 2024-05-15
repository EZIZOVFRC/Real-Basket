import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/Context'

function Card({item}) {
    const {addToBasket}=useContext(MainContext)
  return (
    <div className='col-3 mt-5 mb-5'>
      <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price}.</p>
    <Link to={`details/${item.id}`}>Detail</Link>
    <button onClick={()=>{
        addToBasket(item)
    }}>Add To Basket</button>
  </div>
</div>
    </div>
  )
}

export default Card
