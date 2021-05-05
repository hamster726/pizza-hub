import React from "react";
import {
  AddToCartButton,
  CardContainer,
  CardImage,
  CardTitle,
  DoughSelector,
  ImageContainer, QuantityOfPizza,
  SelectorWrapper,
  SizeSelector,
  Price
} from "./cardStyle";

const CardItem = ({params}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={params.img} alt={params.name} />
      </ImageContainer>
      <CardTitle>{params.name}</CardTitle>
      <SelectorWrapper>
        <DoughSelector></DoughSelector>
        <SizeSelector></SizeSelector>
      </SelectorWrapper>
      <Price>{params.pizzaParams.price} грн.</Price>
      <AddToCartButton></AddToCartButton>
      <QuantityOfPizza>- 1 +</QuantityOfPizza>
    </CardContainer>
  );
};

export default CardItem;
