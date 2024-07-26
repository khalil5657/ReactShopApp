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
// let rawdata = ''
// let data = ''
// async function fetchData() {
//   rawdata = await fetch("https://fakestoreapi.com/products?limit=12");
//   data = await rawdata.json();
// }
// fetchData()
const rawdata = await fetch("https://fakestoreapi.com/products?limit=12")
const data = await rawdata.json()

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
