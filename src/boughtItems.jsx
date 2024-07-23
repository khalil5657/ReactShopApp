import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import styles from "./home.module.css"
import { useState, useEffect } from 'react'
function ShowThem(props){
    const location = useLocation()
    const [count, setCount] = useState(0)
    const [allItems, setAllItems] = useState({})
    const [fullNum, setFullNum] = useState(0)
    useEffect(()=>{
        if (location.state){
            if (location.state.number > 0){
                setFullNum(location.state.number)
            }
            if (location.state.items){
                    setAllItems(location.state.items)
            }
        }
    }, [] )
    if (!location.state){
        return<h1>Nothing to see here!</h1>
    }
    let result = []
    console.log(location.state.items)
    function deleteIt(key){
        setFullNum(Number(fullNum) - Number(allItems[key]))
        let test = allItems
        delete test[key]
        setAllItems(test)
        // console.log(allItems, fullNum)
    }
    function addIt(key){
        let newOne = (allItems)
        newOne[key] = Number(newOne[key]) + 1
        setAllItems(newOne)
        setFullNum(Number(fullNum) +1)
    }
    function reduceIt(key){
        let newOne = (allItems)
        newOne[key] = Number(newOne[key]) - 1
        if (newOne[key] <1){
            delete newOne[key]
        }
        setAllItems(newOne)
        setFullNum(Number(fullNum) -1)
    }
    for (const key in allItems){
        let fullPrice = Number(props.data[key].price) * Number(allItems[key])
        result[result.length] = <div className={styles.bought}>
            <img src={props.data[key].image} alt="" />
            <div className="right-section">
                <h1>{props.data[key].title}</h1>
                <h3><button onClick={()=>reduceIt(key)}>-</button>Quantity: {allItems[key]}<button onClick={()=>addIt(key)}>+</button></h3>
                <h3>Full Price: {fullPrice}$</h3>
                <button onClick={()=>deleteIt(key)}>Delete</button>
            </div>
        </div>
    }
    let total = 0
    for (let key in location.state.items){
        total += Number(props.data[key].price) * allItems[key]
    }
    total = (Math.round(total * 100) / 100).toFixed(2);
    return <><div className={styles.nav}>
    <div><Link to="/" state={{ number: fullNum, items:allItems}}
className="link">Home</Link></div>
    <div><Link  to="/store" className="link" state={{ number: fullNum, items:allItems}}>Store</Link></div>
    <div className={styles.test}><Link to="" state={{number: fullNum, items:allItems}}><svg stroke="currentColor" fill="currentColor"
     stroke-width="0" viewBox="0 0 576 512" class="h-5 w-5" height="1em"
      width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806
     78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745
      0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222
       136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447
        426.165 424 440.326 424 456c0 30.928 25.072 56 56
         56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50
         .405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29
         .319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></Link>
         <div className={styles.number}>{fullNum}</div></div>
</div>
    {result}
    <h1>Total: {total} Dollars.</h1>
    </>
}
export default ShowThem