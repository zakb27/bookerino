import React from "react";

const Card = ({name,author,price,img}) =>{
    price = price/100
    return(
        <div>
            <img src={img} alt={name} className='card_img'/>
            <h3>{name}</h3>
            <h4>{author}</h4>
            <h3>£{price}</h3>
        </div>
    )
}

export default Card;