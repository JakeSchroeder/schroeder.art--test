import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Hero from "./Hero";
import Filters from "./Shelf/Filter";
// import ProductList from "../ProductList";
// import Pagination from "../Pagination";
import Colors from "../utils/Colors";

import Shelf from "./Shelf";
import Cart from "../cart";
import { fetchProducts } from "../../services/shelf/actions";

import arrow_src from "../../img/down-arrow.svg";

const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 776px) {
    flex-direction: column;
  }
`;

const ProductListWrapper = styled.div`
  width: 100%;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const CategoriesTitle = styled.h1`
  padding-top: 16px;

  padding-bottom: 16px;
`;

const SelectMenu = styled.select`
  max-width: 100%;
  padding-right: 32px;
  outline: 0;
  font-size: 1.8rem;
  font-family: inherit;
  background: none;
  border: 0;
  appearance: none;
  background-image: url(${arrow_src});
  background-repeat: no-repeat;
  background-position: 100%;
  font-family: germania-one, sans-serif;
  background &::-ms-expand {
    display: none;
  }
`;

const Art = props => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 9;

  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // //getch products on component mount
  // useEffect(() => {
  //   handleProductFetch();
  // }, []);

  // useEffect(() => {
  //   props.getFilters();
  // }, [props.products]);

  // useEffect(() => {
  //   handleProductFetch(props.productFilters);
  // }, [props.productFilters]);

  // const handleProductFetch = () => {
  //   props.getProducts();
  // };

  // const currentProducts = props.products.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );

  // const changePage = pageNumber => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <>
      <Hero />
      <CategoriesWrapper>
        <Filters />
        <ProductListWrapper>
          <Shelf />

          {/* <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={props.products.length}
            changePage={changePage}
          ></Pagination> */}
        </ProductListWrapper>
      </CategoriesWrapper>
    </>
  );
};

// Art.propTypes = {
//   // getProducts: PropTypes.func.isRequired,
//   products: PropTypes.array
// };

// const mapStateToProps = state => ({
//   products: state.shelf.products
// });

export default Art;
