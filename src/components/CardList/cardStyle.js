import styled, {css} from "styled-components";
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
  max-width: 270px;
`;

const CardImage = styled.img`
  margin-left: 10px; // pizza have strange position on images
  width: 100%;
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
  min-width: 240px;
  height: 50%;
  margin-top: 20px;
  
`;

const SelectorList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 5px;
  
  display: flex;
`;

const List = styled.li`

  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 4%);
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

  ${props => props.disabled && css`
    opacity: 0.3;
  `}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 132px;
  height: 40px;
  background: #fe5f1e;
  border: 1px solid #fe5f1e;
  border-radius: 30px;
  padding: 0 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #ffffff;
  
  & > span {
    font-size: 14px;
  }
  &:hover {
    & > span {
      transform: rotate(360deg);
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid #fe5f1e;
  border-radius: 100%;
  padding: 0;
  color: #fe5f1e;
  height: 40px;
  width: 40px;
  font-size: 14px;
  
  &:hover {
    color: white;
    background-color: #fe5f1e;
  }
`;
const PlusButton = styled(MinusButton)``;

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
