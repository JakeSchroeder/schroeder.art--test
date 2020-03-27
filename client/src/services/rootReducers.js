import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import shelfReducer from "./shelf/reducer";
import cartReducer from "./cart/reducer";
import totalfReducer from "./total/reducer";
import filtersReducer from "./filters/reducer";
import sortReducer from "./sort/reducer";

export default combineReducers({
  auth: authReducer,
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalfReducer,
  filters: filtersReducer,
  sort: sortReducer
});
