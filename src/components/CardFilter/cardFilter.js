import React, {useRef, useState} from "react";
import {
  Button,
  FilterContainer,
  DropdownActiveItem,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  SorterContainer
} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {filterBy, sortBy} from "../../redux/actions/actions";

const  CardFilter = () => {
  const [dropdownOpened, setDropdown] = useState(false);

  const {sorters, filters} = useSelector((state) => state);
  const {currentFilter, currentSorter} = useSelector((state) => {
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

  const renderSorterDropDown = () => {
    return (
      <DropdownContainer
        ref={sortRef}
        onClick={(e) => toggleDropdown(e)}
        active={dropdownOpened}
      >
        Cортувати по:
        <DropdownActiveItem>{Object.values(currentSorter)[0]}</DropdownActiveItem>
        <DropdownMenu active={dropdownOpened}>
          {
            sorters.map((item) => {
              const objKey = Object.keys(item)[0];
              const objValue = Object.values(item)[0];

              if (objKey === Object.values(currentSorter)[0])
                return (
                  <DropdownItem key={objValue} active onClick={() => setActiveSorter(item)}>
                    {objValue}
                  </DropdownItem>
                );
              else
                return (
                  <DropdownItem key={objValue} onClick={() => setActiveSorter(item)}>
                    {objValue}
                  </DropdownItem>
                );
            })}
        </DropdownMenu>
      </DropdownContainer>
    );
  };

  const renderFilterButtons = () => {
    return (
      <>
        {filters.map((item) => {
          const objKey = Object.keys(item)[0];
          const objValue = Object.values(item)[0];
          return (
            <Button
              key={objKey}
              active={objKey === currentFilter ? 'active' : null}
              onClick={() => setActiveFilter(objKey)}
            >
              {objValue}
            </Button>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <FilterContainer>
        {renderFilterButtons()}
      </FilterContainer>
      <SorterContainer>
        {renderSorterDropDown()}
      </SorterContainer>
    </div>
  );
}

export default CardFilter;
