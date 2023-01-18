import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

export default function CheckoutCard({
 product: { id, name, productType, image, price, rating, description },
}) {
 const [{ basket }, dispatch] = useStateValue();
 const removeItem = () => {
  dispatch({
   type: actionTypes.REMOVE_ITEM,
   id,
  });
 };
 return (
  <Card sx={{ maxWidth: 345 }}>
   <CardHeader
    sx={{ marginTop: "1rem" }}
    action={
     //equivalente a un h5
     <Typography variant="h5" color="textSecondary">
      {accounting.formatMoney(price)}
     </Typography>
    }
    title={name}
    subheader="En Tienda"
   />
   <CardMedia
    component="img"
    height="194"
    image={image}
    alt="Paella dish"
    title={description}
   />

   <CardActions
    disableSpacing
    sx={{
     display: "flex",
     justifyContent: "space-between",
     textAlign: "center",
    }}
   >
    <div sx={{ display: "flex" }}>
     {Array(rating)
      .fill()
      .map((_, i) => (
       <span>&#11088;</span>
      ))}
    </div>
    <IconButton>
     <DeleteIcon fontSize="large" onClick={removeItem} />
    </IconButton>
   </CardActions>
  </Card>
 );
}
