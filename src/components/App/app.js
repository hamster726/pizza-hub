import React from "react";
import Header from "../Header/header";
import CardFilter from "../CardFilter/cardFilter";
import CardList from "../CardList/cardList";

const App = () => {
  return (
    <>
      <Header/>
        <CardFilter/>
        <CardList/>
    </>
  )
}

export default App;