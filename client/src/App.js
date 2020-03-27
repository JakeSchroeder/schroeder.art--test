import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import { setCurrentUser, logoutUser } from "./services/auth/actions";
// import jwt_decode from "jwt-decode";
// import { setAuthToken } from "./services/util";

import { createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";
import Layout from "./components/layout/Layout";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/404";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
import Privacy from "./components/privacy";
import Help from "./components/help";
import Art from "./components/art";
//import ProductView from "./components/ProductView";
import Cart from "./components/cart/";

import ScrollToTop from "./components/layout/ScrollToTop";

// // Check for token to keep user logged in
// if (localStorage.jwtTokenSchroeders) {
//   // Set auth token header auth
//   const token = JSON.parse(localStorage.jwtTokenSchroeders);
//   setAuthToken(token);

//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);

//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));

//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // Redirect to login
//     window.location.href = "./";
//   }
// }

WebFont.load({
  typekit: {
    id: "germania-one;alegreya",
    api: "//use.edgefonts.net/"
  }
});

const GlobalStyling = createGlobalStyle`
 
 *, *:after, *:before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    height: 100%;
    width: 100%;

  }

#root {
  height: 100%;
  width: 100%;
}

  
  body {
  width: 100%;
  height: 100%;
    margin: 0;
    padding: 0;
    font-family: alegreya, serif;
    font-size: 1.8rem;
    color: #1b1b1b;
    font-weight: 700;

  }

  h1, h2, h3, h4 {
    margin: 0;
    font-family: germania-one, sans-serif;
  }

  p {
    margin: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

li {
  font-family: germania-one, sans-serif;
}

a {
  color: inherit;
}

button {
  font-family: germania-one, sans-serif;
   font-size: 1.6rem;
  outline: 0;
}

`;

const App = props => {
  useEffect(() => {
    console.log(props.productToAdd);
  }, [props.productToAdd]);

  return (
    <>
      <GlobalStyling />

      <Router>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route exact path="/" component={Art} />

            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/help" component={Help} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} /> */}
            <Route exact path="/cart" component={Cart} />
            <Route
              component={localStorage.jwtTokenSchroeders ? Art : NotFound}
            />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
