import {
  createSlice,
  createEntityAdapter,
  createSelector,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

const adapter = createEntityAdapter();

// Note: move to utilities or a selector. this type of sorting would happen on the api in real use cases, and  you'd just pass this to the reducer.
// if it's not sorted there, you could easily do this in a reducer or in a selector, or in the component :D
// const compare = {
//   lowestprice: (a, b) => {
//     if (a.price < b.price) return -1;
//     if (a.price > b.price) return 1;
//     return 0;
//   },
//   highestprice: (a, b) => {
//     if (a.price > b.price) return -1;
//     if (a.price < b.price) return 1;
//     return 0;
//   }
// };

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async searchOptions => {
    // Note: see note above. typically you'd pass search options to a GET request
    try {
      const { data } = await axios.get("db.json");
      return data.products;
    } catch (err) {
      console.log("Could not fetch products. Try again later.");
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: {
    // there are other ways to handle loading, but see redux-toolkit docs for this
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      adapter.upsertMany(state, action.payload);
    },
    [fetchProducts.pending]: (state, action) => {
      state.loading = false;
    }
  }
});

export default slice.reducer;

export const {
  selectIds: selectProductsIds,
  selectEntities: selectProductsEntities,
  selectAll: selectAllProductsItems,
  selectTotal: selectProductsCount
} = adapter.getSelectors(state => state.products);

export const selectProductsLoading = state => state.products.loading;
// Category selectors

export const selectProductsByCategoryTypes = categoryTypes =>
  createSelector(selectAllProductsItems, products => {
    // return the products of the categoryType
    return products.filter(product => {
      // allow an array to be used
      if (Array.isArray(categoryTypes)) {
        return product.collection.some(categoryTypes);
      }

      return product.collection.includes(categoryTypes);
    });
  });
