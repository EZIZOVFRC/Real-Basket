import React, { Fragment } from 'react'
import Card from './../Card/Card';

function CardList({data}) {
  return (
    <Fragment>
        <div className="cards">
        {
        data.map((item,index)=>{
            return <Card item={item} key={index}/>
    
}
)}
        </div>
    </Fragment>
  )
}

export default CardList
