import { combineReducers } from "redux";

import loaderReducer from "./loader/loader";


const reducer = combineReducers({
  
  loader: loaderReducer,
 
});

export default reducer;
