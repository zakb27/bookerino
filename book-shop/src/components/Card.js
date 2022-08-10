import React from "react";

const Card = ({name,author,price,img}) =>{

    return(
        <div className='link_container'>
            <img src={img} alt={name} className='card_img'/>
            <div className="link_text">
                <h3><span className='card_highlight'>{name}</span></h3>
                <h5>£ {(parseInt(price)/100).toFixed(2)}</h5>
            </div>
        </div>
    )
}

export default Card;