import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProducts } from "../../../services/shelf/actions";

import Spinner from "../../Spinner";
import ShelfHeader from "./ShelfHeader";
import ProductList from "./ProductList";

const Shelf = props => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleFetchProducts();
  }, []);

  useEffect(() => {
    // const { filters: nextFilters, sort: nextSort } = nextProps;

    handleFetchProducts(props.filters, undefined);

    // if (nextSort !== this.props.sort) {
    //   this.handleFetchProducts(undefined, nextSort);
    // }
  }, [props.filters]);

  useEffect(() => {
    handleFetchProducts(undefined, props.sort);
  }, [props.sort]);

  const handleFetchProducts = (filters = props.filters, sort = props.sort) => {
    setIsLoading(true);
    console.log("Fetching");
    props.fetchProducts(filters, sort, () => {
      setIsLoading(false);
      console.log("Complete");
    });
  };

  // const { products } = this.props;
  // const { isLoading } = this.state;

  return (
    <>
      <ShelfHeader
        filters={props.filters}
        productsLength={props.products.length}
      />

      <ProductList
        products={props.products}
        isLoading={isLoading}
        spinner={<Spinner />}
      />
    </>
  );
};

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  filters: PropTypes.array,
  sort: PropTypes.string
};

const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(mapStateToProps, { fetchProducts })(Shelf);
