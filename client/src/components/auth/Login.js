import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../services/auth/actions";
import useInput from "../../hooks/useInput";
import {
  StyledSubmitButton,
  StyledLabel,
  StyledForm,
  StyledInputWrapper,
  StyledErrors,
  StyledNavLink,
  AuthTitle,
  AuthDescription
} from "../utils/FormElements";

const Login = props => {
  const [email, emailInput] = useInput({ type: "email" });
  const [password, passwordInput] = useInput({ type: "password" });
  const [errors, updateErrors] = useState({});

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }

    if (props.errors) {
      updateErrors(props.errors);
      console.log(errors);
    }
  }, [props.errors, props.auth.isAuthenticated]);

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    props.loginUser(userData);
  };

  return (
    <>
      <AuthTitle>Log in to your account!</AuthTitle>
      {/* <AuthDescription>
        View your saved items in cart, track order, recieve promocodes.
      </AuthDescription> */}
      <StyledForm noValidate onSubmit={onSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          {emailInput}
          <StyledErrors>
            {errors.emailnotfound ? errors.emailnotfound : errors.email}
          </StyledErrors>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          {passwordInput}
          <StyledErrors>
            {errors.passwordincorrect
              ? errors.passwordincorrect
              : errors.password}
          </StyledErrors>
        </StyledInputWrapper>
        <StyledInputWrapper alignCenter horizontal>
          <StyledNavLink to="/register">
            Don't Have an Account? Register
          </StyledNavLink>
          <StyledSubmitButton>Log in</StyledSubmitButton>
        </StyledInputWrapper>
      </StyledForm>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
