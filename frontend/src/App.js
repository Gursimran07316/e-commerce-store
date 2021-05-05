import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
