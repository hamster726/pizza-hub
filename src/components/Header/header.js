import React from "react";
import Logo from "./logo.svg"
import {
  Brand,
  BrandContainer,
  BrandDescr,
  CartButton, CartCounter,
  HeaderContainer,
  LogoContainer,
  LogoImg,
  LogoWrapper, Price
} from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper href="/">
        <LogoContainer>
          <LogoImg src={Logo} alt="pizza hub logo"/>
        </LogoContainer>
        <BrandContainer>
          <Brand>Pizza Hub</Brand>
          <BrandDescr>найсмачніша піца у світі</BrandDescr>
        </BrandContainer>
      </LogoWrapper>
      <CartButton href="#">
        <Price >99 999 грн</Price>
        <CartCounter>1</CartCounter>
      </CartButton>
    </HeaderContainer>
  )
}

export default Header;