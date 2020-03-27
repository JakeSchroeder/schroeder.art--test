import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../services/auth/actions";

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

const Register = props => {
  const [firstName, firstNameInput] = useInput({ type: "text" });
  const [lastName, lastNameInput] = useInput({ type: "text" });
  const [email, emailInput] = useInput({ type: "email" });
  const [password, passwordInput] = useInput({ type: "password" });
  const [errors, updateErrors] = useState({});
  // const [state, updateState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   errors: {}
  // });

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, []);

  useEffect(() => {
    if (props.errors) {
      updateErrors(props.errors);
      console.log(errors);
    }
  }, [props.errors]);

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    console.log(newUser);

    props.registerUser(newUser, props.history);
  };

  return (
    <>
      <AuthTitle>Register your account!</AuthTitle>
      <AuthDescription>
        Save your shipping details, track order, recieve promocodes.
      </AuthDescription>
      <StyledForm noValidate onSubmit={onSubmit}>
        <StyledInputWrapper horizontal>
          <StyledInputWrapper nmB ymR>
            <StyledLabel htmlFor="firstName">First Name</StyledLabel>
            {firstNameInput}
            <StyledErrors>{errors.firstName}</StyledErrors>
          </StyledInputWrapper>
          <StyledInputWrapper nmB ymL>
            <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
            {lastNameInput}
            <StyledErrors>{errors.lastName}</StyledErrors>
          </StyledInputWrapper>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          {emailInput}
          <StyledErrors>{errors.email}</StyledErrors>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          {passwordInput}
          <StyledErrors>{errors.password}</StyledErrors>
        </StyledInputWrapper>
        <StyledInputWrapper alignCenter horizontal>
          <StyledNavLink to="/login">
            Already Have an Account? Log in
          </StyledNavLink>
          <StyledSubmitButton>Register</StyledSubmitButton>
        </StyledInputWrapper>
      </StyledForm>
    </>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
