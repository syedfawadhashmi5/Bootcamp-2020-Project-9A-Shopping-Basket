import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseFromCart,
} from "../../Store/productSlice";
import { stateType } from "../Types/global";
import "./ProductCart.css";

function ProductCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: stateType) => state);
  let total = 0;
  console.log(cart);

  return (
    <div className="cartPage">
      <h1>Cart Items</h1>

      <Grid
        container
        spacing={5}
        justify="center"
        alignItems="center"
        className="cartSection"
      >
        {cart &&
          cart.map((item) => {
            total += item.price * item.quantity;
            return (
              <Grid item md={8} xs={10} key={item._productId}>
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  className="cartBody"
                >
                  <Grid item xs={3}>
                    <img
                      className="cart_Img"
                      src={item.image}
                      alt={item.name}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    {item.name}
                  </Grid>
                  <Grid item xs={3}>
                    {item.quantity < 2 ? (
                      <Button variant="contained" size="small" disabled>
                        -
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => dispatch(decreaseFromCart(item))}
                      >
                        -
                      </Button>
                    )}
                    <div className="spacebetween">{item.quantity}</div>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </Button>
                  </Grid>
                  <Grid item xs={3} className="spacebetween">
                    $ {item.price * item.quantity}
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      X
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
      {cart.length ? <h1>Total: {total}</h1> : null}
    </div>
  );
}

export default ProductCart;
