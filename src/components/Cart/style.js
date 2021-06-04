import styled from "styled-components";
import { Link } from "react-router-dom";

// EMPTY CART

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 0;
`;
const Title = styled.h1`
  font-size: 32px;
`;
const Description = styled.div`
  font-size: 18px;
  color: #777777;
  text-align: center;
`;
const CartImg = styled.img`
  margin-top: 45px;
`;
const BackToMenuButton = styled(Link)`
  height: 46px;
  border-radius: 30px;

  padding: 0 30px;
  margin-top: 50px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 46px;
  text-align: center;

  border: none;
  background: #282828;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }
`;

// CART

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  min-width: 320px;
`;
const CartTitle = styled.h2`
  font-size: 32px;
`;
const ClearCartButton = styled.button`
  color: #B6B6B6;
  background-color: transparent;
  border: none;
  font-size: 16px;
`;
const Content = styled.div``;
const PizzaImgContainer = styled.div``;
const PizzaImg = styled.img``;
const DescriptionContainer = styled.div``;
const PizzaName = styled.div``;
const PizzaParams = styled.div``;
const PizzaCount = styled.div``;
const PizzaPrice = styled.div``;
const RemovePizzaButton = styled.button``;
const SumOfPizzas = styled.div``;
const SumPrice = styled.div``;
const BackToMenuButtonWhite = styled.a``;
const PayButton = styled.a``;
const QuantityOfPizza = styled.div``;
const MinusButton = styled.a``;
const PlusButton = styled.a``;

export { Container, Title, Description, CartImg, BackToMenuButton };
export {
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
  PayButton,
  QuantityOfPizza,
  MinusButton,
  PlusButton
};
