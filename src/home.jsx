import styles from "./home.module.css"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function HomePage(props){
    const location = useLocation()
    if (location.state){
        if (location.state.number){
  const { from } = location.state.number
        }
    }
    const [fullNum, setFullNum] = useState(0)
    const [allItems, setAllItems] = useState({})
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
    // console.log(location.state.number)
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.home} state={{number: fullNum, items:allItems}}>Home</div>
                <div><Link className="link" to="store" state={{number: fullNum, items:allItems}}>Store</Link></div>
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
            <div className={styles.title}>
                <h1>Your one-stop destination for all your shopping needs</h1>
                <p className={styles.paragraph}>Discover an unparalleled shopping experience with our extensive selection of products,
                     unbeatable prices, and exceptional customer service.
                     Shop now and transform your shopping journey with us.</p>
                <button>Shop Now</button>
            </div>
            <div className={styles.content}>
                <div>Featured Items</div>
                <div className={styles.featured}>
                    <Link to={"/store/" + 0} state={{number: fullNum, items:allItems}}><div className={styles.item}>
                            <h5>{props.data[0].title}</h5>
                            {/* <p>{props.data[0].description}</p> */}
                            <img src={props.data[0].image} alt="" />
                        </div></Link>
                    <Link to={"/store/" + 1} state={{number: fullNum, items:allItems}}><div className={styles.item}>
                            <h5>{props.data[1].title}</h5>
                            {/* <p>{props.data[1].description}</p> */}
                            <img src={props.data[1].image} alt="" />
                        </div></Link>
                    <Link to={"/store/" + 2} state={{number: fullNum, items:allItems}}><div className={styles.item}>
                            <h5>{props.data[2].title}</h5>
                            {/* <p>{props.data[2].description}</p> */}
                            <img src={props.data[2].image} alt="" />
                        </div></Link>
                    <Link to={"/store/" + 3} state={{number: fullNum, items:allItems}}><div className={styles.item}>
                            <h5>{props.data[3].title}</h5>
                            {/* <p>{props.data[3].description}</p> */}
                            <img src={props.data[3].image} alt="" />
                        </div></Link>
                </div>
            </div>
        </>
    )
}
HomePage.defaultProps = {
    number: 0
  };
export default HomePage