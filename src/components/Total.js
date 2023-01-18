import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Link as RouteLink } from "react-router-dom";

export const Total = () => {
 const [{ basket }, dispatch] = useStateValue();
 return (
  <div
   sx={{
    display: "flex",
    flexDirection: "colum",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
   }}
  >
   <h5>Total Items: {basket.length}</h5>
   <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
   <RouteLink to={"/checkout"}>
    <Button
     sx={{ marginTop: "2rem", color: "dark", backgroundColor: "gray" }}
     variant="container"
     color="secondary"
    >
     Check Out
    </Button>
   </RouteLink>
  </div>
 );
};
