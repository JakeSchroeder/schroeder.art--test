import React from "react";
import styled from "styled-components";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import useCurrencyFormat from "../../hooks/useCurrencyFormat";
import Colors from "../utils/Colors";
import CartProduct from "./CartProduct";

import {
  removeFromCart,
  selectAllShoppingCartItems,
  increaseQuantity,
  decreaseQuantity
} from "../../features/cart/cartSlice";

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1``;

const BackToShopping = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CartView = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  overflow-x: auto;
`;

const TotalCost = styled.h1``;

const CheckoutWrapper = styled.div`
  padding-top: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkout = styled.button`
  width: 200px;
  height: 70px;
  outline: none;
  background: ${Colors.Primary};
`;

const Cart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectAllShoppingCartItems);

  return (
    <>
      <CartView>
        {productsInCart.length ? (
          productsInCart.map(p => {
            return (
              <CartProduct
                product={p}
                removeProduct={id => dispatch(removeFromCart(id))}
                onIncrease={() => dispatch(increaseQuantity(p.id))}
                onDecrease={() => dispatch(decreaseQuantity(p.id))}
                key={p.id}
              />
            );
          })
        ) : (
          <p>
            Add some products in the cart <br />
            :)
          </p>
        )}
      </CartView>
    </>
  );
};

export default Cart;
