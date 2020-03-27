import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import usePrevious from "../../hooks/usePrevious";
//import useCurrencyFormat from "../../hooks/useCurrencyFormat";
import Colors from "../utils/Colors";

import {
  loadCart,
  removeProduct,
  changeProductQuantity
} from "../../services/cart/actions";

import { updateCart } from "../../services/total/actions";

import CartProduct from "./CartProduct";

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

const Cart = props => {
  const { newProduct, productToRemove, productToChange } = props;
  const prevNewProduct = usePrevious(newProduct);
  const prevProductToRemove = usePrevious(productToRemove);
  const prevProductToChange = usePrevious(productToChange);

  useEffect(() => {
    if (prevNewProduct !== newProduct) {
      addProductHandler(newProduct);
    }
  }, [newProduct]);
  useEffect(() => {
    if (prevProductToRemove !== productToRemove) {
      removeProductHandler(productToRemove);
    }
  }, [productToRemove]);

  useEffect(() => {
    if (prevProductToChange !== productToChange) {
      changeProductQuantityHandler(productToChange);
    }
  }, [productToChange]);

  const addProductHandler = product => {
    const { updateCart } = props;

    let localCartProduct = props.cartProducts;

    let productAlreadyInCart = false;

    localCartProduct.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      localCartProduct.push(product);
    }

    updateCart(localCartProduct);
  };

  const removeProductHandler = product => {
    const { updateCart } = props;
    let localCartProduct = props.cartProducts;
    const index = localCartProduct.findIndex(p => p.id === product.id);
    if (index >= 0) {
      localCartProduct.splice(index, 1);
      updateCart(localCartProduct);
    }
  };

  const changeProductQuantityHandler = changedProduct => {
    let localCartProduct = props.cartProducts;
    const product = localCartProduct.find(p => p.id === changedProduct.id);
    product.quantity = changedProduct.quantity;
    if (product.quantity <= 0) {
      removeProductHandler(product);
    }
    props.updateCart(localCartProduct);
  };

  const products = props.cartProducts.map(p => {
    return (
      <CartProduct
        product={p}
        removeProduct={props.removeProduct}
        changeProductQuantity={props.changeProductQuantity}
        key={p.id}
      />
    );
  });

  return (
    <>
      <CartView>
        {products}
        {!products.length && (
          <p>
            Add some products in the cart <br />
            :)
          </p>
        )}
      </CartView>
    </>
  );
};

Cart.propTypes = {
  updateCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  removeProduct: PropTypes.func,
  productToRemove: PropTypes.object,
  changeProductQuantity: PropTypes.func,
  productToChange: PropTypes.object
};

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data
});

export default connect(mapStateToProps, {
  loadCart,
  updateCart,
  removeProduct,
  changeProductQuantity
})(Cart);
