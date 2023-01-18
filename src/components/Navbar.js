import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logozab.png";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

export default function Navbar() {
 const [{ basket, user }, dispatch] = useStateValue();
 const navigate = useNavigate();

 const handleAuth = () => {
  if (user) {
   auth.signOut();
   dispatch({
    type: actionTypes.EMPTY_BASKET,
    basket: [],
   });
   dispatch({
    type: actionTypes.SET_USER,
    user: null,
   });
   navigate("/");
  }
 };

 return (
  <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
   <AppBar
    position="fixed"
    sx={{ backgroundColor: "black", boxShadow: "none" }}
   >
    <Toolbar>
     <Link to={"/"}>
      <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="menu"
       sx={{ marginRight: "10px", height: "2rem" }}
      >
       <img src={logo} />
      </IconButton>
     </Link>

     <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
      zabdieldev
     </Typography>
     <Typography variant="h6" component="p" sx={{ marginRight: "10px" }}>
      Hello {user ? user.email : "Bicho"}
     </Typography>
     <div sx={{ marginLeft: "2px" }}>
      <Link to={"/signin"}>
       <Button variant="outlined" onClick={handleAuth}>
        <strong>{user ? "Sign out" : "Sign In"}</strong>
       </Button>
      </Link>
      <Link to={"/checkout-page"}>
       <IconButton aria-label="show cart items" color="inherit">
        <Badge badgeContent={basket.length} color="secondary">
         <AddShoppingCart fontSize="large" color="primary" />
        </Badge>
       </IconButton>
      </Link>
     </div>
    </Toolbar>
   </AppBar>
  </Box>
 );
}
