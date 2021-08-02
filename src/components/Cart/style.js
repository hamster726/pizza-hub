import styled from "styled-components";
import { Link } from "react-router-dom";
import {device} from "../../styles/device";

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
  min-width: 300px;
  flex-wrap: wrap;
`;

const PizzaCard = styled.div`
  border-top: 1px solid #f4f4f4;
  padding: 30px 0;
`;

const SummaryContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  width: 70%;
  
  @media ${device.laptop} {
    width: 100%;
  }
`;

const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  min-width: 320px;
  padding: 30px 0;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  width: 70%;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const CartTitle = styled.h2`
  font-size: 32px;

  & > span {
    font-size: 26px;
    opacity: 0.75;
  }

  @media ${device.laptop} {
    font-size: calc(16px + 1.5vw);
    
    & > span {
      font-size: calc(16px + 1.5vw);
    }
  }
`;
const ClearCartButton = styled.button`
  color: #b6b6b6;
  background-color: transparent;
  border: none;
  font-size: 16px;
  
  @media ${device.mobileL} {
    font-size: calc(10px + 1.5vw);
  }
`;
const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  
  @media ${device.laptop} {
    width: 100%;
  }
`;
const PizzaImgContainer = styled.div`
  height: 80px;
  width: 80px;
  
  @media ${device.mobileL} {
    height: 50px;
    width: 50px;
  }
`;
const PizzaImg = styled.img`
  width: 100%;
`;
const DescriptionContainer = styled.div`
  min-width: 193px;

  @media ${device.laptop} {
    min-width: 65%;
  }
  @media ${device.mobileXL} {
    min-width: 50%;
  }
  
`;

const PriceCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
  
  @media ${device.laptop} {
    flex-direction: column;
    min-width: initial;
    justify-content: center;
    align-items: flex-end;
  }
`;

const PizzaName = styled.div`
  font-weight: bold;
  font-size: 22px;
  min-width: 235px;
  

  @media ${device.tablet} {
    font-size:calc(12px + 1.5vw);
    min-width: initial;
    max-width:220px;
  }
  
`;
const PizzaParams = styled.div`
  font-size: 18px;
  color: #8d8d8d;

  @media ${device.tablet} {
    font-size:calc(9px + 1.5vw);
  }
  
`;
const PizzaCount = styled.div`
  font-size: 22px;
  font-weight: bold;
  user-select: none;

  @media ${device.tablet} {
    font-size:calc(14px + 1.5vw);
  }
`;
const PizzaPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
  min-width: 77px;

  @media ${device.tablet} {
    font-size:calc(12px + 1.5vw);
    min-width: initial;
  }
`;
const DeletePizzaButton = styled.button`
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 2px solid #d7d7d7;
  border-radius: 100%;
  color: #d7d7d7;
  font-size: 12px;
  
  @media ${device.laptop} {
    display: none;
  }
`;
const SumOfPizzas = styled.div`
  font-size: 22px;
  min-width: 190px;

  & > span {
    font-weight: bold;
  }

  @media ${device.laptop} {
    font-size: calc(12px + 1.5vw);
    margin-right: 60px;
  }
  
`;
const SumPrice = styled.div`
  font-size: 22px;
  min-width: 250px;


  & > span {
    font-weight: bold;
    color: #fe5f1e;
  }

  @media ${device.laptop} {
    font-size: calc(12px + 1.5vw);
  }
`;
const BackToMenuButtonWhite = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  width: 131px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  color: #cacaca !important;
  cursor: pointer;
  font-size: 16px;

  & > span {
    font-size: 13px;
    margin-right: 20px;
  }
  
  @media ${device.mobileXL} {
    height: 45px;
  }
  
`;
const PayButton = styled(BackToMenuButtonWhite)`
  justify-content: center;
  font-weight: bold;
  border: 1px solid #fe5f1e;
  background-color: #fe5f1e;
  color: white !important;
  font-size: 16px;
  width: 211px;

  @media ${device.mobileXL} {
    width: 151px;
  }
`;
const QuantityOfPizza = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  
  @media ${device.mobileXL} {
    min-width: 85px;
  }
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
  PriceCountContainer
};
