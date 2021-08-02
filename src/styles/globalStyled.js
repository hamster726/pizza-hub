import styled from "styled-components";
import {device} from "./device";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;

  max-width: 1340px;

  margin: 0 auto;

  @media ${device.tablet} {
    padding: 0 24px 0 32px;
  }
`;

const Title = styled.h2`
  margin-top: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
`;

export {MainContainer, Title};
