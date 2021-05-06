import React, { useEffect } from "react";
import { Title } from "../../styles/globalStyled";

import CardItem from "./cardItem";
import { CardListContainer } from "./cardListStyle";
import { loadCatalog } from "../../redux/reducers/reducer";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

const CardList = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(state => state.catalog);

  useEffect(() => {
    dispatch(loadCatalog());
  }, []);

  const renderPizzaList = () => {
    return catalog.map((pizza) => {
      return <CardItem params={pizza} />;
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
