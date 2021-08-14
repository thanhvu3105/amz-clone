import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{cart,user},dispatch] = useStateValue();


  console.log(typeof cart);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-CBCC-unloggedin-header.png"
        />
        
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title"> Your Cart </h2>

            {Object.keys(cart).length == 0 ? 'Your cart is empty ' : ''}

            {cart.map(item => 
              <CheckoutProduct
                id = {item.id}
                price = {item.price}
                title = {item.title}
                image = {item.image}
                rating = {item.rating}
             
               />
              )}
          

          
        </div>
      </div>

      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal />
          {/* Subtotal */}
        </div>
      </div>
        

      
    </div>
  );
}

export default Checkout;
