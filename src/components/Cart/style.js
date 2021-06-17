import styled from "styled-components";
import { Link } from "react-router-dom";

// EMPTY CART

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 90vh;

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
const CartImgContainer = styled.div`
  margin-top: 45px;
  min-height: 255px;
`;
const CartImg = styled.img`
  width: 100%;
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
  align-items: center;
  width: 100%;
  min-width: 320px;
`;

const PizzaCard = styled.div`
  border-top: 1px solid #F4F4F4;
  padding: 30px 0;
`;

const SummaryContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  width: 70%;
`;

const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  min-width: 320px;
  padding: 30px 0;
`;

const ButtonsContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  width: 70%;
`;


const CartTitle = styled.h2`
  font-size: 32px;
`;
const ClearCartButton = styled.button`
  color: #b6b6b6;
  background-color: transparent;
  border: none;
  font-size: 16px;
`;
const Content = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const PizzaImgContainer = styled.div`
  height: 80px;
  width: 80px;
`;
const PizzaImg = styled.img`
  width: 100%;
`;
const DescriptionContainer = styled.div``;
const PizzaName = styled.div`
  font-weight: bold;
  font-size: 22px;
  min-width: 180px;
`;
const PizzaParams = styled.div`
  font-size: 18px;
  color: #8d8d8d;
`;
const PizzaCount = styled.div`
  font-size: 22px;
  font-weight: bold;
`;
const PizzaPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
`;
const DeletePizzaButton = styled.button`
  width: 32px;
  height: 32px;
  background: #FFFFFF;
  border: 2px solid #D7D7D7;
  border-radius: 100%;
  color: #D7D7D7;
  font-size: 18px;
`;
const SumOfPizzas = styled.div`
  font-size: 22px;
  & > span {
    font-weight: bold;
  }
`;
const SumPrice = styled.div`
  font-size: 22px;
  & > span {
    font-weight: bold;
    color: #FE5F1E;
  }
`;
const BackToMenuButtonWhite = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 211px;
  height: 55px;
  background: #FFFFFF;
  border: 1px solid #D3D3D3;
  border-radius: 30px;
  color: #CACACA!important;
  cursor: pointer;
`;
const PayButton = styled(BackToMenuButtonWhite)`
  font-weight: bold;
  border: 1px solid #FE5F1E;
  background-color: #FE5F1E;
  color: white!important;
`;
const QuantityOfPizza = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
`;
const MinusButton = styled.a`
  display: flex;
  width: 32px;
  height: 32px;
  background: #FFFFFF;
  border: 2px solid #FE5F1E;
  border-radius: 100%;
`;
const PlusButton = styled(MinusButton)`
`;

export { Container, Title, Description, CartImg, BackToMenuButton };
export {
  CartTitle,
  ClearCartButton,
  Content,
  ContentContainer,
  ContentHeaderContainer,
  SummaryContainer,
  PizzaImgContainer,
  ButtonsContainer,
  PizzaImg,
  PizzaCard,
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
  CartImgContainer,
};
