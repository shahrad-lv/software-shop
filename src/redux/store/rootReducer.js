import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import navbarReducer from "../Reducers/navbarReducer";
import skillReducer from "../Reducers/skillReducer";
import productReducer from '../Reducers/productReducer'

const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    navbar: navbarReducer,
    Skills: skillReducer,
    product: productReducer,
})
export default rootReducer
