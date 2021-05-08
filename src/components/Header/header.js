import React, {useState} from "react";
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
import {useSelector} from "react-redux";

const Header = () => {
  const {price, cartCount} = useSelector((state) => {
    return {
      price: state.sumPrice,
      cartCount: Object.values(state.cart)
    }
  });

  return (
    <HeaderContainer>
      <LogoWrapper href="/">
        <LogoContainer>
          <LogoImg src={Logo} alt="pizza hub logo" />
        </LogoContainer>
        <BrandContainer>
          <Brand>Pizza Hub</Brand>
          <BrandDescr>найсмачніша піца у світі</BrandDescr>
        </BrandContainer>
      </LogoWrapper>
      <CartButton href="#">
        <Price>{price} грн</Price>
        <CartCounter>{cartCount}</CartCounter>
      </CartButton>
    </HeaderContainer>
  );
};

export default Header;
