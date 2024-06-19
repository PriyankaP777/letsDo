import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    axios.get(" https://dummyjson.com/products").then((res) =>
      setMyData(res.data.products));
  }, [])
  return (
    <>
      <h1> Hello Coders </h1>
      {myData.map((post) => {
        const { images, title, description, price, rating } = post;
        return (
          <div className= " pl-10 ">
            <h2 className=" ">Product Name : {title}</h2>
            <h3>ProductImage : {images}</h3>
            <p> Description :{description} </p>
            <p> Price :{price}</p>
            <p> Rating :{rating}</p>
          </div>
        );
      })
      }
    </>
  );
}

export default App
