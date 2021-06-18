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
  border-top: 1px solid #f4f4f4;
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

  & > span {
    font-size: 26px;
    opacity: 0.75;
  }
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
  user-select: none;
`;
const PizzaPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
`;
const DeletePizzaButton = styled.button`
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 2px solid #d7d7d7;
  border-radius: 100%;
  color: #d7d7d7;
  font-size: 12px;
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
    color: #fe5f1e;
  }
`;
const BackToMenuButtonWhite = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  width: 211px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  color: #cacaca !important;
  cursor: pointer;

  & > span {
    font-size: 13px;
  }
`;
const PayButton = styled(BackToMenuButtonWhite)`
  justify-content: center;
  font-weight: bold;
  border: 1px solid #fe5f1e;
  background-color: #fe5f1e;
  color: white !important;
`;
const QuantityOfPizza = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
`;
const MinusButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 2px solid #fe5f1e;
  color: #fe5f1e !important;
  border-radius: 100%;
  cursor: pointer;
`;
const PlusButton = styled(MinusButton)``;

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
