import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;

  max-width: 1340px;

  padding: 0 48px 0 67px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-top: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
`;

export { MainContainer, Title };
