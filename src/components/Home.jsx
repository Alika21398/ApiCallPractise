import React, { useEffect } from 'react'
import axios from "axios"
import { useApi } from '../App'

const Home = () => {
  const data = useApi()
   
  return (
    <>
    <div>
    <div>{data.Director}</div>


    </div>
      
    </>
  )
}

export default Home
