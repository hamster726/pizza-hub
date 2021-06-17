import React, {useEffect, useState} from "react";
import EmptyCartLayout from "./emptyCartLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  deleteFromCart,
  removeFromCart,
} from "../../redux/actions/actions";
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
  DeletePizzaButton,
  SumOfPizzas,
  SumPrice,
  BackToMenuButtonWhite,
  PayButton,
  QuantityOfPizza,
  MinusButton,
  PlusButton,
  ContentHeaderContainer, PizzaCard, SummaryContainer, ButtonsContainer,
} from "./style";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log('effect');
    const cartValues = Object.values(cart);
    if (cartValues.length === 0) {
      setPrice(0);
      setCartCount(0);
    }

    let countCart = 0;
    let countPrice = 0;
    for (let i = 0; i < cartValues.length; i ++) {
      countCart += cartValues[i].quantity;
      countPrice += cartValues[i].price * cartValues[i].quantity;
    }

    setPrice(countPrice);
    setCartCount(countCart);
  })


  const renderAddButton = (pizza) => {
    return (
      <QuantityOfPizza>
        <MinusButton onClick={() => dispatch(removeFromCart(pizza))} />
        {pizza.quantity}
        <PlusButton onClick={() => dispatch(addToCart(pizza))} />
      </QuantityOfPizza>
    );
  };

  const clearCartPls = () => {
    dispatch(clearCart());
  };

  const deletePizzaFromCart = (pizza) => {
    dispatch(deleteFromCart(pizza))
  }

  const renderCartContent = () => {
    if (Object.keys(cart).length === 0) return <EmptyCartLayout />;

    const cartArray = [];

    for (let pizza in cart) {
      if (cart.hasOwnProperty(pizza)) {
        cartArray.push(cart[pizza]);
      }
    }

    return (
      <>
        <ContentHeaderContainer>
          <CartTitle>🛒 Кошик</CartTitle>
          <ClearCartButton onClick={clearCartPls}>
            ♻ Очистити кошик
          </ClearCartButton>
        </ContentHeaderContainer>
        <Content>
          {cartArray.map((pizza) => {
            return (
              <PizzaCard>
                <ContentContainer>
                  <PizzaImgContainer>
                    <PizzaImg src={pizza.img} alt={pizza.key} />
                  </PizzaImgContainer>
                  <DescriptionContainer>
                    <PizzaName>{pizza.name}</PizzaName>
                    <PizzaParams>{`${pizza.dough}, ${pizza.size}`}</PizzaParams>
                  </DescriptionContainer>
                  <PizzaCount>{renderAddButton(pizza)}</PizzaCount>
                  <PizzaPrice>{pizza.price} грн</PizzaPrice>
                  <DeletePizzaButton onClick={() => deletePizzaFromCart(pizza)}>×</DeletePizzaButton>
                </ContentContainer>
              </PizzaCard>
            );
          })}
        </Content>
        <SummaryContainer>
          <ContentContainer>
            <SumOfPizzas>
              Кількість піцци: <span>{cartCount} шт</span>
            </SumOfPizzas>
            <SumPrice>
              Сума замовлення: <span>{price} грн</span>
            </SumPrice>
          </ContentContainer>
        </SummaryContainer>
        <ButtonsContainer>
          <ContentContainer>
            <BackToMenuButtonWhite>Повернутися назад</BackToMenuButtonWhite>
            <PayButton>Оплатити</PayButton>
          </ContentContainer>
        </ButtonsContainer>
      </>
    );
  };

  return <Container>{renderCartContent()}</Container>;
};

export default Cart;
