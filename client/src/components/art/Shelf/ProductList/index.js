import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  position: relative;
`;

const ProductList = ({ products, isLoading, spinner }) => (
  <ProductListWrapper>
    {isLoading
      ? spinner
      : products.map(p => <Product product={p} key={p.id} />)}
  </ProductListWrapper>
);

export default ProductList;
