import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Store(props){
    const { name } = useParams();
    console.log(props.data)
    // return <>
    // <div>
    //     <MakeEm prop={props} />
    // </div>
    //     </>
}
// function MakeEm(prop){
//     let result = [];
//     for (let i =0; i<11; i++){
//         result[result.length] = <Link><div>
//                 <h5>{prop.data[i].title}</h5>
//                 <img src={prop.data[i].image}/>
//             </div></Link>
//     }
//     return result
// }
export default Store