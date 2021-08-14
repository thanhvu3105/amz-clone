import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer.js";
import { useHistory } from "react-router-dom"


function Subtotal() {
    const history = useHistory();
    const [{cart},dispatch] = useStateValue();

    
    
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
               <p>
                {/* Part of the homework */}
                Subtotal ({cart.length} items): <strong> {value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                 This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button onClick={e=>history.push('/payment')}> Proceed to check out</button>

      </div>
    );
  }

export default Subtotal
