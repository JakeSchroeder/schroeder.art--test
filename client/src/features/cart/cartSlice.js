import {
  createSlice,
  createEntityAdapter,
  createSelector
} from "@reduxjs/toolkit";

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState();
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      // it already exists, so let's increase the quantity
      if (state.entities[id]) {
        state.entities[id].quantity += 1;
      } else {
        // just spread the original product and add a quantity
        adapter.addOne(state, { ...payload, quantity: 1 });
      }
    },
    removeFromCart: adapter.removeOne,
    increaseQuantity: (state, { payload: id }) => {
      if (state.entities[id]) {
        state.entities[id].quantity += 1;
      }
    },
    decreaseQuantity: (state, { payload: id }) => {
      if (state.entities[id]) {
        const quantity = state.entities[id].quantity;
        if (quantity > 0) {
          state.entities[id].quantity -= 1;
        }
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = slice.actions;

export default slice.reducer;

export const {
  selectIds: selectShoppingCartIds,
  selectEntities: selectShoppingCartEntities,
  selectAll: selectAllShoppingCartItems,
  selectTotal: selectShoppingCartCount
} = adapter.getSelectors(state => state.cart);

// total by the quantity of items in the cart
export const selectCartTotalWithQuantity = createSelector(
  selectShoppingCartEntities,
  entities =>
    Object.values(entities).reduce((sum, curr) => {
      sum += curr.quantity;
      return sum;
    }, 0)
);

// do the same thing for sub totals, etc
