import React, { useEffect } from "react";
import axios from "axios";
import { useApi } from "../App";
import User from "./User";
import { Link } from "react-router-dom";
import Info from "./Info";

const Home = () => {
  const data = useApi();

  return (
    <>
      <div className="px-44 my-10 mx-auto">
        <h1 className="bg-blue-300 text-3xl text-black font-bold text-center">
          Movie
        </h1>
        <div className="py-20 px-20 bg-blue-200 text-2xl font-semiboldold flex justify-between">
          <div>
          <div>Title: {data.Title}</div>
          <div>Director: {data.Director}</div>
          <div className="flex gap-5 items-center py-3">
            <h2>Users:</h2>

            <p className="px-4 py-2 bg-purple-300 rounded-md hover:bg-pink-300">
              <Link to="/user">User1</Link>
            </p>
          </div>

          </div>
          
          <Info/>
        </div>

       
      </div>
    </>
  );
};

export default Home;
