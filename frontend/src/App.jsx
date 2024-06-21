import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Purchases from "./pages/Purchases";
import RecoverPassword from "./pages/RecoverPassword";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />

            <Route path="account" element={<Account />}>
              <Route index element={<Profile />} />
              <Route path="purchases" element={<Purchases />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:id" element={<Order />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="recover-password" element={<RecoverPassword />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
