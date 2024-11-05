import React from 'react'
import { useApi } from '../App'

const User = () => {
    const data = useApi()
  return (
    <div>
        <div className="px-44 my-10 mx-auto">
        <h1 className="bg-black text-3xl text-white font-bold text-center">
          Movie
        </h1>
        <div className="py-20 px-20 bg-red-300 text-2xl font-semiboldold">
          <div>Title: {data.Title}</div>
          <div>Director: {data.Director}</div>
          <div>Actors: {data.Actors}</div>
          <div>Genre: {data.Genre}</div>
          <div>Year: {data.Year}</div>
          
        </div>
      </div>
      
      
    </div>
  )
}

export default User
