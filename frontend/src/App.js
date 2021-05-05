import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
