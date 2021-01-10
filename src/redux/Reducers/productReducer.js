const productReducer = (state ={}, action) => {
    switch (action.type){
        case 'ADD_TO_CART': {
            return state;
        }
        case 'ADD_TO_CART_ERR': {
            return state;
        }
        default: return state
    }
}

export default productReducer;