import NavBar from "./components/Navbar";
import Catalog from "./pages/Catalogo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/products'>
        <Catalog />
      </Route>

    </Switch>
  </BrowserRouter>
);

export default Routes;
