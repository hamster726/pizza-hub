import React, { useState } from "react";
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
  const [quantity, setQuantity] = useState(0);

  const renderAddButton = () => {
    if (quantity === 0) return <AddToCartButton onClick={() => setQuantity(quantity + 1)}>Додати</AddToCartButton>;

    return (
      <QuantityOfPizza>
        <MinusButton onClick={() => setQuantity(quantity - 1)} />
        {quantity}
        <PlusButton onClick={() => setQuantity(quantity + 1)} />
      </QuantityOfPizza>
    );
  };

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
              checked
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
              disabled
            />
            <Label for={`25sm-size-${params.key}`} disabled>
              25 см
            </Label>
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
        {renderAddButton()}
      </PriceContainer>
    </CardContainer>
  );
};

export default CardItem;
