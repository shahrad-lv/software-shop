// Cart Page
export const removeCart = (product) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection('product')
        .doc(product.id)
        .set({
          ...product,
          Count: 0,
          InCart: false
        })
        .then(() => {
          dispatch({
            type: "REMOVE_CART",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_CART_ERR",
            err,
          });
        });
    };
};

// handleIncrease
export const Increase = (product) => {
    return (dispatch, getState, { getFirebase }) => {
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
            type: "INCREASE_CART",
          });
        })
        .catch((err) => {
          dispatch({
            type: "INCREASE_CART_ERR",
            err,
          });
        });
    };
};

// handleDecrease
export const Decrease = (product) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const CurrentCount = product.Count;
      (firestore
        .collection('product')
        .doc(product.id)
        .set({
          ...product,
          Count: CurrentCount-1,
          InCart: true
        })
        .then(() => {
          dispatch({
            type: "DECREASE_CART",
          });
        })
        .catch((err) => {
          dispatch({
            type: "DECREASE_CART_ERR",
            err,
          });
        }))
    };
};