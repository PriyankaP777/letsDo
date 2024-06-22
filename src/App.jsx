import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get(" https://dummyjson.com/products")
      .then((res) => setMyData(res?.data?.products));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        {" "}
        Hello Coders{" "}
      </h1>
      <div className="flex gap-3 flex-wrap">
        {" "}
        {myData.map((post) => {
          const { images, title, description, price, rating } = post;
          return (
            <div className="p-10 shadow-md">
              <h2 className="text-lg font-bold">Product Name : {title}</h2>
              <span> ProductImage </span>:
              <img src={images} className="w-20 inline-flex" />
              <p> Description :{description} </p>
              <p> Price :{price}</p>
              <p> Rating :{rating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
