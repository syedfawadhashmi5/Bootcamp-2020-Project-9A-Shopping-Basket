import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../Types/global";
import './AppBar.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function NavBar() {
  const classes = useStyles();
  const { cart } = useSelector((state: stateType) => state);
  let total = 0;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
            <div className="manu_text">
            HOME
            </div>
            </Link>
          </Typography>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <div className="nav__right">
              <Link to="/cart">
                <div className="basket">
                  <Badge badgeContent={cart.length ? cart.length : <span>{total}</span>} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </div>
              </Link>
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
