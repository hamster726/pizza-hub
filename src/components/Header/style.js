import styled from "styled-components";
import CartIco from "../../img/icons/cart-icon.svg"
import {Link} from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 52px 0 35px 0;
  flex-wrap: wrap;

  max-width: 1340px;
  
  border-bottom: 2px solid #F7F7F7;;
`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`
const LogoContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 38px;
  height: 38px;
`

const LogoImg = styled.img`
  width: 100%;
`

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`

const Brand = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;

  color: #181818;
`

const BrandDescr = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #7B7B7B;
`

const CartButton = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  min-width: 200px;
  height: 50px;

  background: #FE5F1E;
  border-radius: 30px;

  &:before {
    content: "";
    position: absolute;
    left: 60%;
    top: 50%;

    transform: translate(-50%, -50%);

    width: 2px;
    height: 25px;
    background: rgba(255, 255, 255, 0.25);
  }
`

const Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  min-width: 60px;
  max-width: 60%;
  text-align: right;

  color: #FFFFFF;
`

const CartCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: end;
  max-width: 35%;

  color: #FFFFFF;
`

export {
  HeaderContainer,
  LogoWrapper,
  LogoContainer,
  LogoImg,
  BrandContainer,
  Brand,
  BrandDescr,
  CartButton,
  Price,
  CartCounter

}
