import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import accounting from "accounting";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

interface ExpandMoreProps extends IconButtonProps {
 expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
 const { expand, ...other } = props;
 return <IconButton {...other} />;
})(({ theme, expand }) => ({
 transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
 marginLeft: "auto",
 transition: theme.transitions.create("transform", {
  duration: theme.transitions.duration.shortest,
 }),
}));

export default function Product({
 product: { id, name, productType, image, price, rating, description },
}) {
 const [expanded, setExpanded] = React.useState(false);
 const [{ basket }, dispatch] = useStateValue();

 const handleExpandClick = () => {
  setExpanded(!expanded);
 };

 const addToBasket = () => {
  dispatch({
   type: actionTypes.ADD_TO_BASKET,
   item: {
    id,
    name,
    productType,
    image,
    price,
    rating,
    description,
   },
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
   <CardContent>
    <Typography variant="body2" color="text.secondary">
     {productType}
    </Typography>
   </CardContent>
   <CardActions disableSpacing>
    <IconButton aria-label="añadir al carrito" onClick={addToBasket}>
     <AddShoppingCartIcon fontSize="large" />
    </IconButton>
    <IconButton aria-label="estrellas">
     {Array(rating)
      .fill()
      .map((_, i) => (
       <span>&#11088;</span>
      ))}
    </IconButton>
    <ExpandMore
     expand={expanded}
     onClick={handleExpandClick}
     aria-expanded={expanded}
     aria-label="show more"
    >
     <ExpandMoreIcon />
    </ExpandMore>
   </CardActions>
   <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
     <Typography paragraph>{description}</Typography>
    </CardContent>
   </Collapse>
  </Card>
 );
}
