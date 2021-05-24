import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-height: -webkit-fill-available;
  padding: 50px 0;
`;
const Title = styled.h1`
  font-size: 32px;
  margin-top: 50px;
`;
const Description = styled.div`
  font-size: 18px;
  color: #777777;
  text-align: center;
`;
const CartImg = styled.img`
  margin-top: 45px;
`;
const BackToMenuButton = styled(Link)`
  height: 46px;
  border-radius: 30px;

  padding: 0 30px;
  margin-top: 100px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 46px;
  text-align: center;

  border: none;
  background: #282828;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }
`;

export { Container, Title, Description, CartImg, BackToMenuButton };
