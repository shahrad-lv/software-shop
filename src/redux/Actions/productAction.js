// Home and Shop Page
export const addCart = (product) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const CurrentCount = product.Count;
        firestore
            .collection('product')
            .doc(product.id)
            .set({
                ...product,
                Count: CurrentCount+1,
                InCart: true
            })
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

export const addCartDetail = (product, counter) => {
    return(dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const CurrentCount = product.Count;
        firestore
            .collection('product')
            .doc(product.id)
            .set({
                ...product,
                Count: CurrentCount+ counter,
                InCart: true
            })
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
