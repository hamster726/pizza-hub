import React from "react";
import {
  AddToCartButton,
  CardContainer,
  CardImage,
  CardTitle,
  SelectorList,
  List,
  InputButton,
  Label,
  ImageContainer,
  QuantityOfPizza,
  SelectorWrapper,
  Price,
  PriceContainer,
  MinusButton,
  PlusButton,
} from "./cardStyle";

const CardItem = ({ params }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={params.img} alt={params.name} />
      </ImageContainer>
      <CardTitle>{params.name}</CardTitle>
      <SelectorWrapper>
        <SelectorList>
          <List>
            <InputButton
              type="radio"
              id={`slim-dough-${params.key}`}
              name={`dough-${params.key}`}
            />
            <Label for={`slim-dough-${params.key}`}>тонке</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`fat-dough-${params.key}`}
              name={`dough-${params.key}`}
            />
            <Label for={`fat-dough-${params.key}`}>традиційне</Label>
          </List>
        </SelectorList>
        <SelectorList>
          <List>
            <InputButton
              type="radio"
              id={`25sm-size-${params.key}`}
              name={`size-${params.key}`}
            />
            <Label for={`25sm-size-${params.key}`}>25 см</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`30sm-size-${params.key}`}
              name={`size-${params.key}`}
            />
            <Label for={`30sm-size-${params.key}`}>30 см</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`35sm-size-${params.key}`}
              name={`size-${params.key}`}
            />
            <Label for={`35sm-size-${params.key}`}>35 см</Label>
          </List>
        </SelectorList>
      </SelectorWrapper>
      <PriceContainer>
        <Price>{params.pizzaParams.price} грн.</Price>
        <AddToCartButton>Додати</AddToCartButton>
        <QuantityOfPizza>
          <MinusButton /> 1 <PlusButton />
        </QuantityOfPizza>
      </PriceContainer>
    </CardContainer>
  );
};

export default CardItem;
