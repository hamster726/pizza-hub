import React, { useRef, useState } from "react";
import {
  Button,
  ButtonContainer,
  DropdownActiveItem,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { filterBy, sortBy } from "../../redux/actions/actions";

const CardFilter = React.memo(function CardFilter() {
  const [dropdownOpened, setDropdown] = useState(false);

  const { sorters, filters } = useSelector((state) => state);
  const { currentFilter, currentSorter } = useSelector((state) => {
    return {
      currentFilter: state.filterBy,
      currentSorter: state.sortBy,
    };
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
  };

  const setActiveSorter = (item) => {
    dispatch(sortBy(item));
  };

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
        Cортувати по:
        <DropdownActiveItem>{currentSorter}</DropdownActiveItem>
        <DropdownMenu active={dropdownOpened}>
          {sorters.map((item) => {
            const objKey = Object.keys(item)[0];
            const objValue = Object.values(item)[0];

            if (objKey === currentSorter)
              return (
                <DropdownItem active onClick={(e) => setActiveSorter(objKey)}>
                  {objValue}
                </DropdownItem>
              );
            else
              return (
                <DropdownItem onClick={(e) => setActiveSorter(objKey)}>
                  {objValue}
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
          const objKey = Object.keys(item)[0];
          const objValue = Object.values(item)[0];
          if (objKey === currentFilter) {
            return (
              <Button
                key={objKey}
                active
                onClick={(e) => setActiveFilter(objKey)}
              >
                {objValue}
              </Button>
            );
          } else
            return (
              <Button key={objKey} onClick={(e) => setActiveFilter(objKey)}>
                {objValue}
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
