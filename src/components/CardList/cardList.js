import React, { useEffect } from "react";
import { Title } from "../../styles/globalStyled";

import CardItem from "./cardItem";
import { CardListContainer } from "./cardListStyle";
import { loadCatalog } from "../../redux/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import LoadingPizzaBlock from "../LoadingBlock/loadingPizzaBlock";

const CardList = () => {
  const dispatch = useDispatch();
  const { catalog, isLoading, filterBy, sortBy } = useSelector(
    (state) => state
  );
  let catalogCopy = catalog.slice("");

  useEffect(() => {
    dispatch(loadCatalog());
  }, []);

  const renderPizzaList = () => {
    if (isLoading) {
      return Array(12)
        .fill(0)
        .map((_, index) => <LoadingPizzaBlock key={index} />);
    }

    filterPizza();
    sortPizza();

    return catalogCopy.map((pizza) => {
      return <CardItem key={pizza.key} params={pizza} />;
    });
  };

  const sortPizza = () => {
    switch (Object.keys(sortBy)[0]) {
      case "popularity":
        catalogCopy.sort((a, b) => {
          return a.pizzaParams.popularity > b.pizzaParams.popularity ? +1 : -1;
        });
        break;
      case "price":
        catalogCopy.sort((a, b) => {
          return a.pizzaParams.price > b.pizzaParams.price ? +1 : -1;
        });
        break;
      case "alphabet":
        catalogCopy.sort((a, b) => {
          return a.name > b.name ? +1 : -1;
        });
        break;
    }
  };
  const filterPizza = () => {
    if (filterBy === "all") return;
    catalogCopy = catalogCopy.filter((item) => {
      if (item.pizzaParams[filterBy]) return true;
    });
  };

  return (
    <>
      <Title>Асортимент</Title>
      <CardListContainer>{renderPizzaList()}</CardListContainer>
    </>
  );
};

export default CardList;
