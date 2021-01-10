// Cart Page
export const removeCart = (product) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const CurrentCount = product.Count;
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