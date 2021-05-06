import React from "react";
import Header from "../Header/header";
import CardFilter from "../CardFilter/cardFilter";
import CardList from "../CardList/cardList";
import {Provider} from "react-redux";
import store from "../../redux/store";

const App = () => {

  return (
    <Provider store={store}>
      <Header/>
        <CardFilter/>
        <CardList/>
    </Provider>
  )
}

export default App;
