import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import CheckOut from "./components/CheckoutForm/Checkout";

function App() {
 const [{ user }, dispatch] = useStateValue();

 useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
   console.log(authUser);
   if (authUser) {
    dispatch({
     type: actionTypes.SET_USER,
     user: authUser,
    });
   }
  });
 }, []);

 return (
  <div className="App">
   <Router>
    <Navbar />
    <Routes>
     <Route exact path="/" element={<Products />} />
     <Route exact path="/checkout-page" element={<CheckoutPage />} />
     <Route exact path="/signin" element={<SignIn />} />
     <Route exact path="/signup" element={<SignUp />} />
     <Route exact path="/checkout" element={<CheckOut />} />
    </Routes>
   </Router>
  </div>
 );
}

export default App;
