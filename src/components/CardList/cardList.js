import React, { useEffect } from "react";
import { Title } from "../../styles/globalStyled";

import CardItem from "./cardItem";
import { CardListContainer } from "./cardListStyle";
import { loadCatalog } from "../../redux/reducers/reducer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoadingPizzaBlock from "../LoadingBlock/loadingPizzaBlock";

const CardList = () => {
  const dispatch = useDispatch();
  const { catalog, isLoading, sorters, filters } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadCatalog());
  }, []);

  const renderPizzaList = () => {

    if (isLoading) {
      return Array(12)
        .fill(0)
        .map((_, index) => <LoadingPizzaBlock key={index} />);
    }
    return catalog.map((pizza) => {
      return <CardItem key={pizza.key} params={pizza} />;
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
