import React, { useContext } from 'react'
import MainContext from '../../../context/Context'
import Loading from '../../../components/Loading/Loading'
import CardList from '../CardList/CardList'
import { Helmet } from 'react-helmet'

function Home() {
  const {loading,data}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="full">
      <h1>Best Products</h1>
      {
        loading? <Loading/> : <CardList data ={data}/>
      }
    </div>
    </>
  )
}

export default Home
