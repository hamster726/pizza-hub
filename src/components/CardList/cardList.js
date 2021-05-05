import React from "react";
import { Title } from "../../styles/globalStyled";

import CatalogItemImg1 from "../../img/catalog/catalog-item-1.png";
import CatalogItemImg2 from "../../img/catalog/catalog-item-2.png"
import CatalogItemImg3 from "../../img/catalog/catalog-item-3.png"
import CatalogItemImg4 from "../../img/catalog/catalog-item-4.png"

import CardItem from "./cardItem";
import { CardListContainer } from "./cardListStyle";

const CardList = () => {
  const cardItemParams = [
    {
      key: "cheeseburger-pizza-99",
      img: CatalogItemImg1,
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
      key: "cheese-pizza-99",
      img: CatalogItemImg2,
      name: "Сирна",

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
        popularity: 6,
        price: 106,
      },
    },
    {
      key: "asian-shrimp-pizza-99",
      img: CatalogItemImg3,
      name: "Креветки по азіатскі",

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
        popularity: 5,
        price: 120,
      },
    },
    {
      key: "chicken-cheese-pizza-99",
      img: CatalogItemImg4,
      name: "Сирна із куркою",

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
        popularity: 8,
        price: 96,
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
