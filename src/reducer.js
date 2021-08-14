export const initialState = {
    cart: [],
    user: null
};

export const getCartTotal = (cart) => {
    let sum = 0;
    for(let i = 0; i < cart.length; i++){
      sum+=cart[i].price
    }
    return sum;
    //long for 
    // cart.reduce((accum,item) => item.price + accum,0)
}  

const reducer = (state,action) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart,action.item],
            };

        case 'EMPTY_BASKET': 
            return{
                ...state,
                cart:[]
            }

        case 'REMOVE_FROM_CART':
            //going through all the cart item and check for matching id item, 
            //it only find the first one and return to you
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];

            if(index >= 0) {
                newCart.splice(index,1) //Cutting the item by 1
            }else {
                console.warn(`Can't remove product (id: ${action.id}) as its not in cart`)
            }

            return {
                ...state,
                cart: newCart
            }
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }


};

export default reducer;