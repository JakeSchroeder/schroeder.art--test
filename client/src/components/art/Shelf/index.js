import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";

import Spinner from "../../Spinner";
import ShelfHeader from "./ShelfHeader";
import ProductList from "./ProductList";
import {
  fetchProducts,
  selectProductsLoading,
  selectAllProductsItems
} from "../../../features/products/productsSlice";

const Shelf = props => {
  const dispatch = useDispatch();

  const loading = useSelector(selectProductsLoading);
  const products = useSelector(selectAllProductsItems);
  const filters = useSelector(state => state.filters.items);
  const sort = useSelector(state => state.sort.type);

  useEffect(() => {
    handleFetchProducts(filters, undefined);
  }, [filters, sort]);

  const handleFetchProducts = async searchOptions => {
    dispatch(fetchProducts(searchOptions));
  };

  return (
    <>
      <ShelfHeader filters={filters} productsLength={products.length} />

      <ProductList
        products={products}
        isLoading={loading}
        spinner={<Spinner />}
      />
    </>
  );
};

export default Shelf;
