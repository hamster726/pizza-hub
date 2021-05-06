import {getCatalogAPI} from "../../api/api";
import {
  GET_CATALOG,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  SORT_BY,
  FILTER_BY,
  UPDATE_PRICE,
  UPDATE_ORDER_SIZE,
  IS_LOADING
} from "../types";
import {
  getCatalog,
  addToCart,
  deleteFromCart,
  clearCart,
  sortBy,
  filterBy,
  updatePrice,
  updateOrderSize,
  isLoading
} from "../actions/actions";

const initialState = {
  catalog: [],
  sortedCatalog: [],
  sortBy: [],
  filterBy: [],
  sumPrice: 0,
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOG: {
      return {
        ...state,
        catalog: action.payload,
      };
    }
    case ADD_TO_CART: {

      return {
        ...state,
        catalog: action.payload,
      };
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        catalog: action.payload,
      };
    }
    default:
      console.log("default dispatch", action);
      return {
        ...state
      }
  }
};

// THUNK ABOUT IT

export const loadCatalog = () => async (dispatch) => {
  dispatch(isLoading(true));
  getCatalogAPI().then((res) => {
    dispatch(getCatalog(res.data));
    dispatch(isLoading(false));
  })
};



export default reducer;
