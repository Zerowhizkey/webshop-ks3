import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, Link as RouterLink} from "react-router-dom";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartState } from "../context/Context";
import Link from "@mui/material/Link"
// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {
    state: { cart },
  } = CartState();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link component={RouterLink} to="/" color="secondary"
            variant="h6"
            noWrap
            
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, textDecoration: "none" }}
          >
            PAP
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Grid
                  className="navbar-grid"
                  container
                  direction="column"
                  justifyContent="space-around"
                  alignItems="stretch"
                >
                  <Button variant="contained" component={NavLink} to="/">
                    Home
                  </Button>
                  <Button
                    variant="contained"
                    component={NavLink}
                    to="/products"
                  >
                    Products
                  </Button>
                  <Button variant="contained" component={NavLink} to="/cart">
                    Cart
                  </Button>
                </Grid>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <Link  component={RouterLink} to="/" color="secondary"
            variant="h6"
            noWrap
            
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, textDecoration: "none"}}
          >
            PAP
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button variant="text" component={NavLink} to="/" color="secondary">
              Home
            </Button>
            <Button
              variant="text"
              component={NavLink}
              to="/products"
              color="secondary"
            >
              Products
            </Button>
            <Button
              variant="text"
              component={NavLink}
              to="/cart"
              color="secondary"
            >
              Cart
            </Button>
          </Box>

          <Button variant="contained" component={NavLink} to="/cart">
            <AddShoppingCartIcon />
            {cart.length}
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://previews.123rf.com/images/kongvector/kongvector1707/kongvector170700182/81502024-super-cool-red-chili-character-cartoon.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Disabled the profil navbar items */}
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} disabled>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
