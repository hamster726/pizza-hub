import styled, {css} from "styled-components";
import ArrowIco from "../../img/icons/dropdown-arrow.svg"
import {device} from "../../styles/device"

const FilterContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 40px;
  

  @media ${device.tablet} {
    overflow: scroll;
  }

`

const SorterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`



  height: 46px;
  border-radius: 30px;

  padding: 0 30px;
  margin: 5px 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border: none;


  ${props => props.active && css`
    background: #282828;
    color: #FFFFFF;
  `}
`

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;

  min-width: 190px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  user-select: none;


  color: #2C2C2C;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;

    width: 10px;
    height: 5.62px;

    transform: translateY(-50%) rotate(180deg);
    background-image: url(${ArrowIco});
    transition: 0.1s all ease;

    ${props => props.active && css`
      transform: translateY(-50%) rotate(0);
    `}
  }

  @media ${device.laptop} {
    margin-top: 20px;
    padding: 10px 0;
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);

  background: #FFFFFF;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 13px 0;
  min-width: 132px;

  transition: .1s all ease;

  ${props => props.active && css`
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  `}

`
const DropdownItem = styled.div`

  display: flex;
  align-items: center;
  cursor: pointer;

  font-weight: normal;

  height: 38px;
  padding-left: 14px;

  &:hover {
    background: rgba(254, 95, 30, 0.05);
    color: #FE5F1E;
    font-weight: bold;
  }

`

const DropdownActiveItem = styled.div`
  margin-left: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  border-bottom: 1px dashed #FE5F1E;
  color: #FE5F1E;

`

export {
  FilterContainer,
  Button,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownActiveItem,
  SorterContainer
}
