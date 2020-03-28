import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
// import test_src from "../img/painting1.png";
import useCurrencyFormat from "../hooks/useCurrencyFormat";
import Colors from "./utils/Colors";
import { addProduct } from "../services/cart/actions";
const ProductWrapper = styled.div`
  min-width: 300px;

  /* border: 1px solid #b72a2a; */
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
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

const ProductOverlay = styled.div`
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${ProductImageWrapper}:hover & {
    opacity: 1;
    background: rgba(0, 0, 0, 0.66);
    transition: all 0.5s ease;
  }
`;

const ActionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  display: flex;

  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const InfoText = styled.p`
  color: ${Colors.White};
  font-family: germania-one, sans-serif;
`;

const StyledButton = styled.button`
  border: 0;
  background: ${({ outline }) => (outline ? `none` : `#b72a2a`)};
  color: ${({ outline }) => (outline ? `#fff` : `inherit`)};
  width: 100px;
  height: 32px;
  cursor: pointer;
  margin-bottom: 16px;
  border: 1px solid ${({ outline }) => (outline ? `#b72a2a` : `#554848`)};
  color: ${Colors.White};
  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const MoreInfo = () => <InfoText>More Info</InfoText>;

const Product = ({ id, img, title, price, addToCart, noButton }) => {
  const dispatch = useDispatch();
  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={img} alt={`image of ${title}`} />
        asdfasdfasdf
        <ProductOverlay>
          <ActionWrapper>
            <MoreInfo />
          </ActionWrapper>
        </ProductOverlay>
      </ProductImageWrapper>

      <ProductFooter>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{useCurrencyFormat(price)}</ProductPrice>
        </ProductInfo>
        {noButton ? null : (
          <StyledButton onClick={() => dispatch(addToCart(id))}>
            Add To Cart
          </StyledButton>
        )}
      </ProductFooter>
    </ProductWrapper>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired
};

export default Product;
