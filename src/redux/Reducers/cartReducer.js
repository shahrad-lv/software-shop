const cartReducer = (state ={}, action) => {
    switch (action.type){
        case "REMOVE_CART": {
            return state;
        }
        case "REMOVE_CART_ERR": {
            return state;
        }
        case "INCREASE_CART": {
            return state;
        }
        case "INCREASE_CART_ERR": {
            return state;
        }
        default: return state
    }
}

export default cartReducer;
