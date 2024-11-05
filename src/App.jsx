import React, { createContext, useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import axios from "axios";
import { Outlet } from "react-router-dom";

// creating context
export const ApiContext = createContext();

// used useSpi to use it instead of usecontext
export function useApi() {
  return useContext(ApiContext);
}

const App = () => {
  const [data, setData] = useState([]);

  // Destructing object to access the properties in data so we can use any. This is done because data is an object. if it was array we could have mapped it
  const { Actors, Awards, ...otherProperties } = data;

  // just stating link of API
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=fb8a08b1";

  // making a function that gets api and sets the datas in data using setData
  const moviesAPI = async () => {
    try {
      const res = await axios.get(API);
      console.log("moviesapi", res);
      setData(res.data);
    } catch (error) {
      console.log("erroe", error);
    }
  };
  
  //  using useeffect hook the moviesAPI will render once the page is loaded
  useEffect(() => {
    moviesAPI();
  }, []);
  
  console.log("data", Actors);

  return (
    <ApiContext.Provider value={data}>
      <Outlet />
    </ApiContext.Provider>
  );
};

export default App;
