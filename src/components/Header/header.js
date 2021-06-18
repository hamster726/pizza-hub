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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const {cart} = useSelector((state) => {
    return {
      cart: state.cart
    }
  });

  const [price, setPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log('effect');
    const cartValues = Object.values(cart);
    if (cartValues.length === 0) {
      setPrice(0);
      setCartCount(0);
    }

    let countCart = 0;
    let countPrice = 0;
    for (let i = 0; i < cartValues.length; i ++) {
      countCart += cartValues[i].quantity;
      countPrice += cartValues[i].price * cartValues[i].quantity;
    }

    setPrice(countPrice);
    setCartCount(countCart);
  })

  const basketIcon = <FontAwesomeIcon icon={faShoppingBasket} />;

  return (
    <HeaderContainer>
      <LogoWrapper to="/">
        <LogoContainer>
          <LogoImg src={Logo} alt="pizza hub logo" />
        </LogoContainer>
        <BrandContainer>
          <Brand>Pizza Hub</Brand>
          <BrandDescr>найсмачніша піца у світі</BrandDescr>
        </BrandContainer>
      </LogoWrapper>
        <CartButton to="/cart">
          <Price>{price.toLocaleString()} грн</Price>
          <CartCounter><span>{basketIcon}</span> {cartCount}</CartCounter>
        </CartButton>
    </HeaderContainer>
  );
};

export default Header;
