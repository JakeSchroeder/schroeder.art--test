import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductList = ({ productsToShow }) => {
  return (
    <ProductListWrapper>
      {productsToShow.map(product => (
        <Product
          key={product.id}
          id={product.id}
          img={product.img_src}
          title={product.title}
          price={product.price}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
