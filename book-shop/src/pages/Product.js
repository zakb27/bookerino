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
                     setCartItemCount,
                     changeCart
                 }
                 ) =>{

    window.scrollTo(0, 0)

    const [numberOfItems,setItems] = useState(1);
    // const test = item1.state.currentItem.name;
    let params = useParams();
    const item = (GetItem(params));

    const checkExists = (item) =>{
        let exists = false;
        itemsInCart.find(element=>{
            exists=(element.id===item.id);
        })
        return exists;
    }

    const addToCart = () =>{
        alert("Added to cart")
        if(checkExists(item)){
            console.log("NOW WHAT")
            setItemsInCart(current =>
                current.map(obj => {
                    if (obj.id === item.id) {
                        return {...obj,quantity: obj.quantity+parseInt(numberOfItems)};
                    }

                    return obj;
                }),
            );
        }
        else {
            console.log(checkExists(item))
            setItemsInCart([...itemsInCart, {...item, quantity: parseInt(numberOfItems)}]);

        }
        changeCart();
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
        changeCart();
    }

    return(
        <div className='product_container'>
            <NavBar cartItemCount={cartItemCount}/>

            <div className="hero">

                <img src={item.img} alt="Image of book"/>
                <div className='book_details'>
                    <div>
                        <h2>{item.name}</h2>
                        <h5>by {item.author}</h5>
                    </div>
                    <div>
                        <h3>£ {(parseInt(item.price) / 100).toFixed(2)}</h3>
                    </div>
                    <input type="number" value = {numberOfItems} onChange={handleChange}/>
                    <button onClick={addToCart}>Add to cart</button>
                    <Link as={NavLink} to={'/bookerino/store'}><button className='go_back'><i className="uil uil-arrow-left"></i></button></Link>
                </div>
            </div>

            <div className="description">
                <div className="titles_container">
                <h3><span className='text-highlight'>Description</span></h3>
                <h3><span className='text-highlight2'>Reviews(0)</span></h3>
                </div>
                <p>Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam. Quaerimus enim finem bonorum.
                    Illum mallem levares, quo optimum atque humanissimum virum, Cn. Cum sciret confestim esse moriendum
                    eamque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat. Inde sermone vario
                    sex illa a Dipylo stadia confecimus. Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum
                    lorem hipsum. Small batch godard post-ironic brunch williamsburg irure commodo synth bespoke blog organic
                    subway tile. Vaporware ugh 90’s in sriracha tempor yr beard iceland sustainable.</p>
            </div>

            <div className="related_container">
                <h2>Related</h2>
                <div className="related">
                {findRelated().map((item,index) =>{
                    return(<Link
                        as={NavLink}
                        to={{
                            pathname: `/bookerino/shop/${item.name}`
                        }}
                        key={item.id}
                    >
                        <img src={item.img} alt="Related things"/>
                    </Link>)
                })}
                </div>
            </div>

        </div>);
}


export default Product;