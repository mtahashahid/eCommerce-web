import "./App.css";
import { Header, Homepage, ProductDetails } from "./components";
import { Switch, Route } from "react-router-dom";
import {Container} from "react-bootstrap"
function App() {
  return (
    <div className="main-layout">
      <Container>
        <Header />
      </Container>
      <Container>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/ProductDetails">
            <ProductDetails />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
