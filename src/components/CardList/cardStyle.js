import styled from "styled-components";
import PlusIco from "../../img/icons/plus-solid.svg"
import MinusIco from "../../img/icons/minus-solid.svg"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 20%;
  max-width: 290px;
  margin: 3% 0.5%;
  padding: 10px;
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
  background: #f3f3f3;
  border-radius: 10px;
  min-height: 85px;
  height: 50%;
  margin-top: 20px;
`;

const SelectorList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px;
  
  display: flex;
`;

const List = styled.li`

  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
`;


const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);

  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  margin: 0;

  color: #2C2C2C;
`;

const InputButton = styled.input`
  opacity: 0;
  width: 0;
  &[type="radio"]:checked + ${Label} {
    background: white;  
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
`;

const Price = styled.div`
  flex: 1 1 20%;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
`;

const AddToCartButton = styled.button`
  //display: block;
  display: none;
  position: relative;
  width: 132px;
  height: 40px;

  background: #fe5f1e;
  border: 1px solid #fe5f1e;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 0 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  
  color: #ffffff;
  
  &:before {
    content: "+";
    position: absolute;

    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 19px;
    top: 50%;
    left: 20px;
    
    transform: translate(-50%,-50%);
  }
`;

const QuantityOfPizza = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 132px;
  height: 40px;
  border-radius: 30px;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;

`;

const MinusButton = styled.button`
  display: block;
  position: relative;
  padding: 0;
  
  border: none;
  background-color: #fe5f1e;
  border-radius: 100%;
  color: white;
  height: 40px;
  width: 40px;
  
  
  
  &:before {
    position: absolute;
    content: url(${MinusIco});
    top:50%;
    left:50%;
    width: 80%;
    transform: translate(-50%, -47%) scale(0.5);
  }

`;
const PlusButton = styled(MinusButton)`
  &:before {
    content: url(${PlusIco});
`;

export {
  CardContainer,
  ImageContainer,
  CardImage,
  CardTitle,
  SelectorWrapper,
  SelectorList,
  List,
  InputButton,
  Label,
  Price,
  AddToCartButton,
  QuantityOfPizza,
  PriceContainer,
  MinusButton,
  PlusButton
};
