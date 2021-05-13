import React, {useEffect, useState} from "react";
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
  const {cart} = useSelector((state) => {
    return {
      cart: state.cart
    }
  });

  const [price, setPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartValues = Object.values(cart);
    if (cartValues.length === 0) return 0;

    let countCart = 0;
    let countPrice = 0;
    for (let i = 0; i < cartValues.length; i ++) {
      countCart += cartValues[i].quantity;
      countPrice += cartValues[i].price * cartValues[i].quantity;
    }

    setPrice(countPrice);
    setCartCount(countCart);
    console.log('check')
  })

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
