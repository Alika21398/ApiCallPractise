import React from 'react'
import { useApi } from '../App'

const Info = () => {
    const data = useApi()
    console.log("info", data.Released)
  return (
    <>
    <div className=''>
        <div>Year: {data.Year}</div>
        <div>Released date: {data.Released}</div>
        
        <div>Imdb Rate: {data.imdbRating}</div>

    </div>
      
    </>
  )
}

export default Info
