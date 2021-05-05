import React from "react";
import { Title } from "../../styles/globalStyled";

import CatalogItemImg from "../../img/catalog/catalog-item-1.png";
import CardItem from "./cardItem";
import { CardListContainer } from "./cardListStyle";

const CardList = () => {
  const cardItemParams = [
    {
      key: "cheeseburger-pizza-99",
      img: CatalogItemImg,
      name: "Чізбургер піца",

      pizzaKit: {
        doughSlim: true,
        doughFat: true,
        small: true,
        middle: true,
        large: false,
      },
      pizzaParams: {
        meat: true,
        grill: false,
        spice: false,
        popularity: 10,
        price: 99,
      },
    },
    {
      key: "cheeseburger-pizza-99",
      img: CatalogItemImg,
      name: "Чізбургер піца",

      pizzaKit: {
        doughSlim: true,
        doughFat: true,
        small: true,
        middle: true,
        large: false,
      },
      pizzaParams: {
        meat: true,
        grill: false,
        spice: false,
        popularity: 10,
        price: 99,
      },
    },
    {
      key: "cheeseburger-pizza-99",
      img: CatalogItemImg,
      name: "Чізбургер піца",

      pizzaKit: {
        doughSlim: true,
        doughFat: true,
        small: true,
        middle: true,
        large: false,
      },
      pizzaParams: {
        meat: true,
        grill: false,
        spice: false,
        popularity: 10,
        price: 99,
      },
    },
    {
      key: "cheeseburger-pizza-99",
      img: CatalogItemImg,
      name: "Чізбургер піца",

      pizzaKit: {
        doughSlim: true,
        doughFat: true,
        small: true,
        middle: true,
        large: false,
      },
      pizzaParams: {
        meat: true,
        grill: false,
        spice: false,
        popularity: 10,
        price: 99,
      },
    },
  ];

  const renderPizzaList = () => {
    return cardItemParams.map((pizza) => {
      console.log(pizza);
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
