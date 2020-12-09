import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import { products } from "./Product_Json/Products.json";
import HeroHeader from "../HeroHeader/HeroHeader";
import { Container, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/productSlice";
import { productType } from "../Types/global";
import "./Product.css";

const Product = () => {
  const dispatch = useDispatch();

  function truncate(str: any, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div id="Content">
                  <HeroHeader />

              <Container maxWidth="md">
            <Box mt={5} mb={5}>

      <h1 className="heading">Products</h1>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {products.map((product: productType, ind: number) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={ind}>
              <Card>
                <CardContent>
                  <img
                    className="productImg"
                    src={product.image}
                    alt={product.name}
                  />
                  <h3 className="productName">{product.name}</h3>
                  <body className="productDes">
                    {truncate(product.description, 150)}
                  </body>
                  <div className="contentAlign">
                    <span className="productPrice">
                      Price: $ {product.price}
                    </span>
                    <button
                      className="addToCart"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      add to cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </Box>
          </Container>
    </div>
  );
};

export default Product;
