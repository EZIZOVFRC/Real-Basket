import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/Context'

function Basket() {
  let total=0
  const {basketItems,addToBasket,deleteFromBasket}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Basket</title>
    </Helmet>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">price</th>
      <th scope="col">Total price</th>
      <th scope="col">Count</th>
      <th scope="col">add</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
      basketItems.map((item,index)=>{
        total+=item.totalPrice
        return (
          <tr key={index}>
          <th scope="row">{index}</th>
          <td>{item.item.title}</td>
          <td><img src={item.item.image} width={'60px'} height={'60px'} alt="" /></td>
          <td>{item.item.price}</td>
          <td>{item.totalPrice}</td>
          <td>{item.count}</td>
          <td><button className='btn btn-primary ' onClick={()=>{
            addToBasket(item.item)
          }}>Add</button></td>
          <td><button className='btn btn-danger ' onClick={()=>{
deleteFromBasket(item.item)
          }}> Delete</button></td>
        </tr>
        )
      })
    }
  </tbody>
</table>
<h1>{total}</h1>
    </>
  )
}

export default Basket
