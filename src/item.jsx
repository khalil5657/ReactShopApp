import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import styles from "./home.module.css"
import { useState, useEffect } from 'react'
function ShowItem(props){
    const { item } = useParams();
    const [count, setCount] = useState(0)
    const location = useLocation()
    const [allItems, setAllItems] = useState({})
    if (location.state){
        if (location.state.number){
  const { from } = location.state.number
        }
    }
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
//   const { from } = location.state.number
//     useEffect(()=>{
//         if (location.state.number > 0){
//             setFullNum(location.state.number)
//         }
//     }, [] )
    function changeIt(e){
        setCount(Number(e.target.value))
    }
    function addToCurrent(){
        setFullNum(Number(fullNum) + Number(count))
        let testObj = allItems
        if (allItems[item]>0){
            testObj[item] = Number(testObj[item]) + Number(count)
            setAllItems(testObj)
        }else{
            testObj[item] = Number(count)
            setAllItems(testObj)
        }
        console.log(allItems)
    }
    return (
        <>
            <div className={styles.nav}>
                <div><Link to="/" state={{ number: fullNum, items:allItems}}
       className="link">Home</Link></div>
                <div><Link  to="/store" className="link" state={{ number: fullNum, items:allItems}}>Store</Link></div>
                <div className={styles.test}><Link to="/cart" state={{number: fullNum, items:allItems}}><svg stroke="currentColor" fill="currentColor"
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
            <div className={styles.cadre}>
                <h3>{props.data[Number(item)].title}</h3>
                <img src={props.data[Number(item)].image} alt="" />
                <p>{props.data[Number(item)].description}</p>
                <input type="number" max={99} min={1} onChange={changeIt}/>
                <button type="submit" onClick={addToCurrent}>Buy Now</button>
            </div>
        </>
    )
}
ShowItem.defaultProps = {
    number: 0
  };
export default ShowItem