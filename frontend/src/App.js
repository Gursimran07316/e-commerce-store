import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/admin/users" component={UserListScreen} />
            <Route path="/admin/products" component={ProductListScreen} exact />
            <Route
              path="/admin/products/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route path="/admin/orders" component={OrderListScreen} />
            <Route path="/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/products/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/signin" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
            <Route path="/" exact component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
