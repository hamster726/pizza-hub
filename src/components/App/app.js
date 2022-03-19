import React from "react";
import Header from "../Header/header";
import CardFilter from "../CardFilter/cardFilter";
import CardList from "../CardList/cardList";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cart from "../Cart/cart";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <CardFilter />
            <CardList />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
