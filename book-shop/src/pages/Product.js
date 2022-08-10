import NavBar from '../components/Navbar'
import {db} from '../tools/db'
import React, { useState } from 'react'
import Card from '../components/Card'
import {Link, NavLink, useParams} from "react-router-dom";
import {GetItem} from '../components/GetItem'
import { useLocation } from 'react-router-dom';
import "./product.css"
const Product = ({
                     itemsInCart,
                     cartItemCount,
                     setItemsInCart,
                     setCartItemCount
                 }
                 ) =>{

    window.scrollTo(0, 0)

    const [numberOfItems,setItems] = useState(1);
    // const test = item1.state.currentItem.name;
    let params = useParams();
    const item = (GetItem(params));

    const addToCart = () =>{
        alert("Added to cart")
        setItemsInCart([...itemsInCart,{...item,quantity:parseInt(numberOfItems)}]);
        setCartItemCount(cartItemCount+parseInt(numberOfItems));
    }

    const findRelated = () =>{
        let pusher = []
        for(let i=0;i<db.length;i++){
            if(db[i].genre===item.genre && db[i].name!==item.name){
                pusher.push(db[i]);
            }
        }
        return pusher;
    }

    const handleChange = (event) =>{
        setItems(event.target.value);
    }

    return(
        <div className='product_container'>
            <NavBar cartItemCount={cartItemCount}/>

            <div className="hero">

                <img src={item.img} alt="Image of book"/>
                <div className='book_details'>
                    <h2>{item.name}</h2>
                    <h5>by {item.author}</h5>
                    <h3>£ {(parseInt(item.price)/100).toFixed(2)}</h3>
                    <input type="number" value = {numberOfItems} onChange={handleChange}/>
                    <button onClick={addToCart}>Add to cart</button>
                    <Link as={NavLink} to={'/store'}><button>Go back</button></Link>
                </div>
            </div>

            <div className="description">
                <p>Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam. Quaerimus enim finem bonorum.
                    Illum mallem levares, quo optimum atque humanissimum virum, Cn. Cum sciret confestim esse moriendum
                    eamque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat. Inde sermone vario
                    sex illa a Dipylo stadia confecimus. Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum
                    lorem hipsum. Small batch godard post-ironic brunch williamsburg irure commodo synth bespoke blog organic
                    subway tile. Vaporware ugh 90’s in sriracha tempor yr beard iceland sustainable.</p>
            </div>

            <div className="related">
                <h2>Related</h2>
                {findRelated().map((item,index) =>{
                    return(<Link
                        as={NavLink}
                        to={{
                            pathname: `/store/${item.name}`
                        }}
                        key={item.id}
                    >
                        <img src={item.img} alt="Related things"/>
                        {item.name}
                    </Link>)
                })}
            </div>

        </div>);
}


export default Product;