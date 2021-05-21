import React, {useEffect, useState} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {addToCart, deleteFromCart} from "../../redux/actions/actions";

const CardItem = React.memo(function CardItem({ params }) {

  const [quantity, setQuantity] = useState(0);
  const [dough, setDoug] = useState("slim");
  const [size, setSize] = useState("small");

  const pizzaKey = `${params.key}-${dough}-${size}`;

  const {cart} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart[pizzaKey]) {
      setQuantity(cart[pizzaKey].quantity)
    } else setQuantity(0);
  })

  const addPizzaToCart = () => {
    const pizzaParams = {
      key: params.key,
      dough: dough,
      size: size,
      price: params.pizzaParams.price
  };
    dispatch(addToCart(pizzaParams));
    setQuantity(quantity + 1);
  };

  const removePizzaFromCart = () => {
    const pizzaParams = {
      key: params.key,
      dough: dough,
      size: size,
      price: params.pizzaParams.price
    };
    dispatch(deleteFromCart(pizzaParams));
    setQuantity(quantity - 1);
  };

  const renderAddButton = () => {
    if (quantity === 0)
      return <AddToCartButton onClick={addPizzaToCart}>Додати</AddToCartButton>;

    return (
      <QuantityOfPizza>
        <MinusButton onClick={removePizzaFromCart} />
        {quantity}
        <PlusButton onClick={addPizzaToCart} />
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
            <Label for={`slim-dough-${params.key}`}>тонке</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`fat-dough-${params.key}`}
              name={`dough-${params.key}`}
              onChange={() => setDoug("fat")}
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
              onChange={() => setSize("small")}
              defaultChecked
            />
            <Label for={`25sm-size-${params.key}`}>25 см</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`30sm-size-${params.key}`}
              name={`size-${params.key}`}
              onChange={() => setSize("middle")}
            />
            <Label for={`30sm-size-${params.key}`}>30 см</Label>
          </List>
          <List>
            <InputButton
              type="radio"
              id={`35sm-size-${params.key}`}
              name={`size-${params.key}`}
              onChange={() => setSize("large")}
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
});

export default CardItem;
