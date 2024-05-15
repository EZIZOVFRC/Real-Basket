import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainContext from "./context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import ROUTES from "./routes/routes.jsx";

function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems')?JSON.parse(localStorage.getItem('basketItems')):[]);
  const [error, setError] = useState("");



  const addToBasket = (item) => {
    const target = basketItems.find(x => x.item.id == item.id);
    if (target) {
      target.count += 1;
      target.totalPrice += parseInt(item.price)
      setBasketItems([...basketItems])
      console.log(basketItems);
      localStorage.setItem("basketItems",JSON.stringify(basketItems))
    } else {
      const newBasketItem = {
        item: item,
        count: 1,
        totalPrice:parseInt(item.price),
        
      };
      setBasketItems([...basketItems,newBasketItem])
      console.log(basketItems);
      localStorage.setItem("basketItems",JSON.stringify(basketItems))
    }
  };

  const deleteFromBasket=(item)=>{
    const target = basketItems.find(x => x.item.id == item.id);
    if (target.count>1) {
     target.count-=1 
     target.totalPrice-=item.price
     setBasketItems([...basketItems])
     localStorage.setItem("basketItems",JSON.stringify([...basketItems.filter(x=>x.item.id!=item.id)]))
    }
    else{
      setBasketItems([...basketItems.filter(x=>x.item.id!=item.id)])
      localStorage.setItem("basketItems",JSON.stringify([...basketItems.filter(x=>x.item.id!=item.id)]))
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const contextData = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    basketItems,
    setBasketItems,
    addToBasket,
    deleteFromBasket 
  }


  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
