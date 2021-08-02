import styled from "styled-components";
import CartIco from "../../img/icons/cart-icon.svg"
import {Link} from "react-router-dom";
import {device} from "../../styles/device";



const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 52px 0 35px 0;
  flex-wrap: wrap;

  max-width: 1340px;
  background: white;
  border-bottom: 2px solid #F7F7F7;
  position: sticky;
  top: -20px;
  z-index: 1;
  
  @media ${device.tablet} {
    padding: 15px 0 15px 0;
    top: 0;
  }

  @media ${device.mobileXL} {
    justify-content: center;
  }
  
`
const LogoContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 38px;
  height: 38px;

`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    ${LogoContainer} {
      transition: 0.5s ease all;
      transform: rotate(360deg);
    }
  }
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
  
  &:hover {
    box-shadow: 0px 10px 22px 7px rgba(34, 60, 80, 0.2);
  }
  
  @media ${device.mobileXL} {
    width: 50px;
    min-width: auto;
    margin-left: auto;
    padding: 0;

    &:before {
      width: 0;
      height: 0;
    }

    &:hover {
      box-shadow: none;
    }
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
  
  @media ${device.mobileXL} {
    min-width: auto;
    max-width: auto;
    width: 0;
    overflow: hidden;
  }
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

  @media ${device.mobileXL} {
    justify-content: center;
    span {
      margin-right: 5px
    }
  }
  
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
