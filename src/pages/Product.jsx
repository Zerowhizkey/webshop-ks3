import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import peppers from "../peppers";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CartState } from "../context/Context";

function Product() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { productId } = useParams();
  const pepper = peppers.find((pepper) => pepper.id === productId);

  return (
    <Layout>
      <Grid
        container
        spacing={2}
        justifyItems="center"
        // alignItems="center"
        justifyContent="center"
      >
        <Grid item margin={2} align="center" md={3} sm={4} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={pepper.name}
              height="140"
              image={pepper.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {pepper.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                autem veritatis saepe optio et. Deleniti sit id natus!
                Necessitatibus sed accusamus corrupti fugiat aut enim eaque
                accusantium dolorem adipisci aperiam?
              </Typography>
            </CardContent>
            <CardActions>
              {cart.some((p) => p.id === pepper.id) ? (
                <Button
                  size="small"
                  variant="danger"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: pepper });
                  }}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  size="small"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: pepper });
                  }}
                >
                  Add
                </Button>
              )}
              
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Product;
