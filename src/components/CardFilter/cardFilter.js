import React, {useEffect, useRef, useState} from "react";
import {Button, ButtonContainer, DropdownActiveItem, DropdownContainer, DropdownItem, DropdownMenu} from "./style";

const CardFilter = React.memo(function CardFilter() {

  const [dropdownOpened, setDropdown] = useState(false);
  const [activeSorter, setSorter] = useState("популярності");
  const [activeFilter, setFilter] = useState('Всі');

  const sorters = ["популярності", "ціні", "алфавіту"];
  const filters = ["Всі", "М'ясні", "Веганська", "Гриль", "Гострі"];

  const sortRef = useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setDropdown(false);
    }
  };

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
    return (
      <DropdownContainer ref={sortRef} onClick={(e) => toggleDropdown(e)} active={dropdownOpened}>
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
    return (
      <>
        {filters.map(item => {
          if (item === activeFilter) return <Button key={item} active onClick={e => setActiveFilter(e)}>{item}</Button>
          else return <Button key={item} onClick={e => setActiveFilter(e)}>{item}</Button>
        })}
      </>
    )
  }

  return (
    <div>
      <ButtonContainer>
        {renderMenuButtons()}
        {renderDropDownItems()}
      </ButtonContainer>

    </div>
  )
})

export default CardFilter;
