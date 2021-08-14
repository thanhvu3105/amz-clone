import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider";


import { store } from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css'

import "animate.css"




function Product({id,title,image,price,rating}) {
    const [{cart},dispatch] = useStateValue();

    const addToCart = () => {
        

        //dispatch item into data layout
        dispatch( {
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

        function notify(){
            return (
                <div className="Notification">
                    <img src={image}></img>
                    <div><strong>"{title}"</strong> is added to your cart </div> 
                </div>
            )
        }
        store.addNotification({
            content: notify(),
            title: "Wonderful!",
            message: "teodosii@react-notifications-component",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
              showIcon: true,
            },
            width: 300,
            
          });

        
        

        

    }

    return (
        <div className="product">
            <div className="product__info">
                <p> {title} </p>
                <p className="prodcut__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p> 👍 </p>
                    ))}

                </div>
            </div>
            <img src={image}/>

            <button className="AddToCart" onClick={addToCart}> Add to cart</button>
        </div>
    
    )
}



export default Product
