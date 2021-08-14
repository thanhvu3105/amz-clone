import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider";
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

const shuffle = require("lodash");

function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const [{cart},dispatch] = useStateValue();

    

    const removeFromCart = () => {

        dispatch({
            type: "REMOVE_FROM_CART",
    
            id: id,
            title: title,
            image: image,
            price: price,                rating: rating,
            
        })
        //remove item from cart 
    }


    return (

        <div className="checkoutProduct">
            

            <img className="checkoutProduct__image" src={image}></img>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title}</p>
                <p className="checkoutProduct__price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p> 👍 </p>
                    ))}
                </div>
                {!hideButton &&(<button onClick={removeFromCart}> Remove from cart</button>)}
                        
            </div>

        </div>


        
    )
}

export default CheckoutProduct
