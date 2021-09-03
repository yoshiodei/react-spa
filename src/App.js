import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ProductPageCreams from "./Pages/ProductPageCreams";
import CartPage from "./Pages/CartPage";
import ProductPageSoaps from "./Pages/ProductPageSoaps";
import ProductPageOils from "./Pages/ProductPageOils";

function App() {
  return (
    <div className="App">
        <Router>
          <h2 className="message">Page Is Available For Large Screens Only</h2>
          
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product/creams/:id" exact>
              <ProductPageCreams />
            </Route>
            <Route path="/product/oils/:id" exact>
              <ProductPageOils />
            </Route>
            <Route path="/product/soaps/:id" exact>
              <ProductPageSoaps />
            </Route>
            <Route path="/cart" exact>
              <CartPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
