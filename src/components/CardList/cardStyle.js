import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 20%;
  max-width: 300px;
  margin: 0 0.5%;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 292px;
`;

const CardImage = styled.img`
  margin-left: 25px; // pizza have strange position on images
`;

const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

const SelectorWrapper = styled.div`
  background: #F3F3F3;
  border-radius: 10px;
  min-height: 85px;
`;

const DoughSelector = styled.div``;

const SizeSelector = styled.div``;

const Price = styled.div``;

const AddToCartButton = styled.button``;

const QuantityOfPizza = styled.div``;

export {
  CardContainer,
  ImageContainer,
  CardImage,
  CardTitle,
  SelectorWrapper,
  DoughSelector,
  SizeSelector,
  Price,
  AddToCartButton,
  QuantityOfPizza,
};
