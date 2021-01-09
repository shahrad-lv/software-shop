export const addCart = (product) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('cart')
            .add(product)
            .then(() => {
                dispatch({
                    type: "ADD_TO_CART"
                })
            })
            .catch(err => {
                dispatch({
                    type: "ADD_TO_CART_ERR",
                    err
                })
            })
    }
}

