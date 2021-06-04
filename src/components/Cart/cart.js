import React from "react";
import EmptyCart from "./emptyCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/actions/actions";
import {
  Container,
  CartTitle,
  ClearCartButton,
  Content,
  ContentContainer,
  PizzaImgContainer,
  PizzaImg,
  DescriptionContainer,
  PizzaName,
  PizzaParams,
  PizzaCount,
  PizzaPrice,
  RemovePizzaButton,
  SumOfPizzas,
  SumPrice,
  BackToMenuButtonWhite,
  PayButton, QuantityOfPizza, MinusButton, PlusButton,
} from "./style";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderAddButton = (pizza) => {
    return (
      <QuantityOfPizza>
        <MinusButton onClick={() => dispatch(deleteFromCart(pizza.key))} />
        {pizza.quantity}
        <PlusButton onClick={() => dispatch(addToCart(pizza.key))} />
      </QuantityOfPizza>
    );
  };

  const renderCartContent = () => {

    const cartArray = [];

    for (let pizza in cart) {
      if (cart.hasOwnProperty(pizza)) {
        cartArray.push(cart[pizza]);
      }
    }

    return cartArray.map(pizza => {
      console.log(pizza)
      return (
        <>
          <ContentContainer>
            <PizzaImgContainer>
              <PizzaImg src={pizza.img} alt={pizza.key}/>
            </PizzaImgContainer>
            <DescriptionContainer>
              <PizzaName></PizzaName>
              <PizzaParams></PizzaParams>
            </DescriptionContainer>
            <PizzaCount>{renderAddButton(pizza)}</PizzaCount>
            <PizzaPrice></PizzaPrice>
            <RemovePizzaButton></RemovePizzaButton>
          </ContentContainer>
          <ContentContainer>
            <SumOfPizzas></SumOfPizzas>
            <SumPrice></SumPrice>
          </ContentContainer>
          <ContentContainer>
            <BackToMenuButtonWhite></BackToMenuButtonWhite>
            <PayButton></PayButton>
          </ContentContainer>
        </>
      )
    })
  }

  return (
    <Container>
      <ContentContainer>
        <CartTitle>🛒 Кошик</CartTitle>
        <ClearCartButton>♻ Очистити кошик</ClearCartButton>
      </ContentContainer>
      <Content>
        {renderCartContent()}
      </Content>

      {/*{Object.keys(cart).length === 0 ? <EmptyCart/>: ''}*/}
    </Container>
  );
};

export default Cart;
