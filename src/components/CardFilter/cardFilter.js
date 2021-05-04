import React, {useState} from "react";
import {Button, ButtonContainer, DropdownActiveItem, DropdownContainer, DropdownItem, DropdownMenu} from "./style";

const CardFilter = () => {

  const [dropdownOpened, setDropdown] = useState(false);
  const [activeSorter, setSorter] = useState("популярності");
  const [activeFilter, setFilter] = useState('Всі');


  const setActiveSorter = (e) => {
    setSorter(e.target.innerText);
  }

  const toggleDropdown = (e) => {
    setDropdown(!dropdownOpened);
  }

  const setActiveFilter = (e) => {
    setFilter(e.target.innerText);
  }


  const renderDropDownItems = () => {

    const sorters = ["популярності", "ціні", "алфавіту"];


    return (
      <DropdownContainer onClick={(e) => toggleDropdown(e)} active={dropdownOpened}>
        Cортувати по: <DropdownActiveItem>{activeSorter}</DropdownActiveItem>
        <DropdownMenu active={dropdownOpened}>
          {sorters.map((item) => {
            if (item === activeSorter) return <DropdownItem active
                                                            onClick={e => setActiveSorter(e)}>{item}</DropdownItem>
            else return <DropdownItem onClick={e => setActiveSorter(e)}>{item}</DropdownItem>
          })}
        </DropdownMenu>
      </DropdownContainer>
    )
  }

  const renderMenuButtons = () => {
    const filters = ["Всі", "М'ясні", "Веганська", "Гриль", "Гострі", "Закриті"];

    return (
      <>
        {filters.map(item => {
          if (item === activeFilter) return <Button active onClick={e => setActiveFilter(e)}>{item}</Button>
          else return <Button onClick={e => setActiveFilter(e)}>{item}</Button>
        })}
      </>
    )
  }

  return (
    <>
      <ButtonContainer>
        {renderMenuButtons()}
        {renderDropDownItems()}
      </ButtonContainer>

    </>
  )
}

export default CardFilter;