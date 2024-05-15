import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
  const {id}=useParams()
  const [data,setData]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`).then((res)=>{
console.log(res);
      // setData(res.data)
    })
  })
  return (
   <>
   <div className="div">
    <img src={data.image} alt="" />
    <p>{data.desc}</p>
   </div>
   </>
  )
}

export default Detail
