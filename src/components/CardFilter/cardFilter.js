import React, {useRef, useState } from "react";
import {
  Button,
  ButtonContainer,
  DropdownActiveItem,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {filterBy, sortBy} from "../../redux/actions/actions";

const CardFilter = React.memo(function CardFilter() {
  const [dropdownOpened, setDropdown] = useState(false);

  const sorters = ["популярності", "ціні", "алфавіту"];
  const filters = ["Всі", "М'ясні", "Веганська", "Гриль", "Гострі"];

  const { filter, sorter } = useSelector((state) => {
    return {
      filter: state.filterBy,
      sorter: state.sortBy,
    }
  });
  const dispatch = useDispatch();

  const sortRef = useRef();

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setDropdown(false);
    }
  };

  const setActiveFilter = (item) => {
    dispatch(filterBy(item));
  }

  const setActiveSorter = (item) => {
    dispatch(sortBy(item));
  }

  const toggleDropdown = () => {
    setDropdown(!dropdownOpened);
  };

  const renderDropDownItems = () => {
    return (
      <DropdownContainer
        ref={sortRef}
        onClick={(e) => toggleDropdown(e)}
        active={dropdownOpened}
      >
        Cортувати по: <DropdownActiveItem>{sorter}</DropdownActiveItem>
        <DropdownMenu active={dropdownOpened}>
          {sorters.map((item) => {
            if (item === sorter)
              return (
                <DropdownItem active onClick={(e) => setActiveSorter({item})}>
                  {item}
                </DropdownItem>
              );
            else
              return (
                <DropdownItem onClick={(e) => setActiveSorter({item})}>
                  {item}
                </DropdownItem>
              );
          })}
        </DropdownMenu>
      </DropdownContainer>
    );
  };

  const renderMenuButtons = () => {
    return (
      <>
        {filters.map((item) => {
          if (item === filter)
            return (
              <Button key={item} active onClick={(e) => setActiveFilter(item)}>
                {item}
              </Button>
            );
          else
            return (
              <Button key={item} onClick={(e) => setActiveFilter(item)}>
                {item}
              </Button>
            );
        })}
      </>
    );
  };

  return (
    <div>
      <ButtonContainer>
        {renderMenuButtons()}
        {renderDropDownItems()}
      </ButtonContainer>
    </div>
  );
});

export default CardFilter;
