import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import HomePage from './home.jsx'
import Store from './store.jsx';
import Store1 from './store1.jsx';
import ShowItem from './item.jsx';
import ShowThem from './boughtItems.jsx';
let cart = 0;
const rawdata = await fetch("https://fakestoreapi.com/products?limit=12")
const data = await rawdata.json()
// const raw = await fetch("https://api.giphy.com/v1/gifs/search?api_key=AtNKqVAxubIRW9Dwf2leh6d45eXY2xt1&limit=12&offset=12&q=soccer")
// const final = await raw.json()
function add(num){
  cart = cart + num
  console.log(cart)
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage data={data} number={cart} />,
  },
  {
    path: "store/:item",
    element: <ShowItem data={data} number={cart} func={add}/>,
  },
  {
  path: "store",
  element: <Store1 data={data} number={cart}/>
  },
  {
    path: "cart",
    element: <ShowThem data={data}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
