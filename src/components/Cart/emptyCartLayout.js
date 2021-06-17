import React from "react";
import {
  Container,
  Title,
  Description,
  CartImg,
  BackToMenuButton,
  CartImgContainer,
} from "./style";

import CartIco from "../../img/empty-cart-img.svg";

const EmptyCartLayout = () => {
  return (
    <>
      <Title>Кошик пустий 😕</Title>
      <Description>
        Скоріш за все, ви не замовляли ще піцу.
        <br />
        Для того щоб замовити піцу, перейдіть на головну сторінку.
      </Description>
      <CartImgContainer>
        <CartImg src={CartIco} alt="cart with human" />
      </CartImgContainer>
      <BackToMenuButton to={"/"}>Повернутися назад</BackToMenuButton>
    </>
  );
};

export default EmptyCartLayout;
