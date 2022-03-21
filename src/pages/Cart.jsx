import React from "react";
import Layout from "../components/Layout";
import { CartState } from "../context/Context";
import { Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  function getTotal() {
    return cart
      .reduce((acc, curr) => acc + curr.price * curr.qty, 0)
      .toFixed(2);
  }

  return (
    <Layout>
      <Grid container padding={5} gap={2}>
        {cart.map((props) => (
          <Grid
            item
            container
            key={props.id}
            direction="row"
            justifyItems="center"
            border={1}
            alignItems="center"
            width="100%"
          >
            <Grid item xs={3} sx={{ display: { xs: "none", sm: "block" } }}>
              <img
                src={props.image}
                alt={props.name}
                style={{
                  height: "100px",
                  width: "150px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography>{props.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{props.price.toFixed(2)}$</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconButton
                value={props.qty}
                onClick={() =>
                  dispatch({
                    type: "DECREASE_FROM_CART",
                    payload: { id: props.id, qty: props.qty - 1 },
                  })
                }
              >
                <RemoveIcon />
              </IconButton>
              <Typography sx={{display: "inline"}}>{props.qty}</Typography>
              <IconButton
                value={props.qty}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_QTY",
                    payload: { id: props.id, qty: props.qty + 1 },
                  });
                }}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                component="span"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: props })
                }
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Typography>Total amount: {getTotal()}$</Typography>
      </Grid>
    </Layout>
  );
}

export default Cart;
