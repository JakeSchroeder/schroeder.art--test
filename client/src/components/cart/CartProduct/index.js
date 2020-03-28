import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Colors from "../../utils/Colors";

import useCurrencyFormat from "../../../hooks/useCurrencyFormat";

const ProductWrapper = styled.div`
  padding: 0 16px;
  max-width: 300px;
  position: relative;
`;

const ProductFooter = styled.div`
  /* height: 40px; */
  width: 100%;
  /* border-top: 1px solid #554848; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 8px 0;
`;

const ProductInfo = styled.div``;

const ProductTitle = styled.p``;

const ProductPrice = styled.p`
  color: #b72a2a;
`;

const ProductImageWrapper = styled.div`
  position: relative;
  border: 18px solid ${Colors.Gray};
  box-shadow: -4px 4px 8px -2px rgba(0, 0, 0, 0.77);
  /* cursor: pointer; */
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
`;

const ProductDelete = styled.button`
  position: absolute;
  top: -8.75px;
  right: -8.75px;
  width: 35px;
  height: 35px;
  z-index: 999;
  background: ${Colors.Primary};
`;

const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductQuantity = styled.span`
  display: block;
  padding-left: 16px;
  padding-right: 16px;
`;

const IncrementQuantity = styled.button`
  width: 35px;
  background: ${Colors.Primary};
  height: 35px;
`;
const DecrementQuantity = styled.button`
  width: 35px;
  background: ${Colors.Primary};
  height: 35px;
`;

const CartProduct = ({ onIncrease, onDecrease, product, removeProduct }) => {
  const formattedPrice = useCurrencyFormat(product.price);

  return (
    <ProductWrapper>
      <ProductDelete
        onClick={() => {
          removeProduct(product.id);
        }}
      >
        x
      </ProductDelete>
      <ProductImageWrapper>
        <ProductImage
          src={product.img_src}
          alt={`Image of ${product.title} Artwork`}
        />
      </ProductImageWrapper>
      <ProductFooter>
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{formattedPrice}</ProductPrice>
        </ProductInfo>
        <ProductQuantityWrapper>
          <DecrementQuantity onClick={() => onDecrease()}>-</DecrementQuantity>
          <ProductQuantity>{product.quantity}</ProductQuantity>
          <IncrementQuantity onClick={() => onIncrease()}>+</IncrementQuantity>
        </ProductQuantityWrapper>
      </ProductFooter>
    </ProductWrapper>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

export default CartProduct;
