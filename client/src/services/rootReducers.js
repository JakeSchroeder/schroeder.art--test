import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import totalfReducer from "./total/reducer";
import filtersReducer from "./filters/reducer";
import sortReducer from "./sort/reducer";

// new
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

export default combineReducers({
  auth: authReducer,
  total: totalfReducer,
  filters: filtersReducer,
  sort: sortReducer,
  // new
  products: productsReducer,
  cart: cartReducer
});
