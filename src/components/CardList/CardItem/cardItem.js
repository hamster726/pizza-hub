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
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CardItem = React.memo(function CardItem({ params }) {
  const [dough, setDoug] = useState("slim");
  const [size, setSize] = useState("small");

  const pizzaKey = `${params.key}-${dough}-${size}`;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const quantity = cart[pizzaKey] ? cart[pizzaKey].quantity : 0;

  const addPizzaToCart = () => {
    const pizzaParams = {
      key: params.key,
      dough: dough,
      size: size,
      price: params.pizzaParams.price,
      img: params.img,
      name: params.name,
    };
    dispatch(addToCart(pizzaParams));
  };

  const removePizzaFromCart = () => {
    const pizzaParams = {
      key: params.key,
      dough: dough,
      size: size,
      price: params.pizzaParams.price,
      img: params.img,
      name: params.name,
    };
    dispatch(removeFromCart(pizzaParams));
  };


  const renderAddButton = () => {
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const minusIcon = <FontAwesomeIcon icon={faMinus} />;

    if (quantity === 0)
      return (
        <AddToCartButton onClick={addPizzaToCart}>
          <span>{plusIcon}</span>Додати
        </AddToCartButton>
      );

    return (
      <QuantityOfPizza>
        <MinusButton onClick={removePizzaFromCart} >{minusIcon}</MinusButton>
        {quantity}
        <PlusButton onClick={addPizzaToCart} >{plusIcon}</PlusButton>
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
              defaultChecked
              onChange={() => setDoug("slim")}
            />
            <Label htmlFor={`slim-dough-${params.key}`}>тонке</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`fat-dough-${params.key}`}
              name={`dough-${params.key}`}
              onChange={() => setDoug("fat")}
            />
            <Label htmlFor={`fat-dough-${params.key}`}>традиційне</Label>
          </List>
        </SelectorList>
        <SelectorList>
          <List>
            <InputButton
              type="radio"
              id={`25sm-size-${params.key}`}
              name={`size-${params.key}`}
              onChange={() => setSize("small")}
              defaultChecked
            />
            <Label htmlFor={`25sm-size-${params.key}`}>25 см</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`30sm-size-${params.key}`}
              name={`size-${params.key}`}
              onChange={() => setSize("middle")}
            />
            <Label htmlFor={`30sm-size-${params.key}`}>30 см</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`35sm-size-${params.key}`}
              name={`size-${params.key}`}
              onChange={() => setSize("large")}
            />
            <Label htmlFor={`35sm-size-${params.key}`}>35 см</Label>
          </List>
        </SelectorList>
      </SelectorWrapper>
      <PriceContainer>
        <Price>{params.pizzaParams.price} грн.</Price>
        {renderAddButton()}
      </PriceContainer>
    </CardContainer>
  );
});

export default CardItem;
