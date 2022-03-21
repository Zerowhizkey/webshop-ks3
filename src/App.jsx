import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgb(128,0,128)",
      dark: "rgb(128,0,175)",
      light: "#ffcdcd",
    },
    secondary: {
      main: 'rgb(255,255,255)',
      dark: '#43ef71',
      light: '#ffcdcd',
    },
  },
});

function App() {
  return (
  <>
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  </ThemeProvider>
  </>
  )
}

export default App;
