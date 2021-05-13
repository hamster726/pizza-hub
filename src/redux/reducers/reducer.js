import { getCatalogAPI } from "../../api/api";
import {
  GET_CATALOG,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  SORT_BY,
  FILTER_BY,
  UPDATE_PRICE,
  UPDATE_ORDER_SIZE,
  IS_LOADING,
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
  isLoading,
} from "../actions/actions";

const initialState = {
  catalog: [],
  sortedCatalog: [],
  sortBy: "popularity",
  filterBy: "all",
  sumPrice: 0,
  cart: {},
  isLoading: true,
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
      const cartCopy = Object.assign({}, state.cart);
      const pizzaCopy = Object.assign({}, action.payload);
      const pizzaKey = `${pizzaCopy.key}-${pizzaCopy.dough}-${pizzaCopy.size}`;

      if (Object.keys(cartCopy).includes(pizzaKey)) {
        pizzaCopy.quantity = cartCopy[pizzaKey].quantity + 1;
      } else {
        pizzaCopy.quantity = 1;
      }

      cartCopy[pizzaKey] = pizzaCopy;

      return {
        ...state,
        cart: cartCopy,
      };
    }
    case DELETE_FROM_CART: {
      const cartCopy = Object.assign({}, state.cart);
      const pizzaCopy = Object.assign({}, action.payload);
      const pizzaKey = `${pizzaCopy.key}-${pizzaCopy.dough}-${pizzaCopy.size}`;

      if (cartCopy[pizzaKey].quantity === 1) {
        delete cartCopy[pizzaKey];
      } else {
        pizzaCopy.quantity = cartCopy[pizzaKey].quantity - 1;
      }

      cartCopy[pizzaKey] = pizzaCopy;

      return {
        ...state,
        cart: cartCopy,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default:
      console.log("default dispatch", action);
      return {
        ...state,
      };
  }
};

// THUNK ABOUT IT

export const loadCatalog = () => async (dispatch) => {
  dispatch(isLoading(true));
  await getCatalogAPI()
    .then((res) => {
      dispatch(getCatalog(res.data));
      dispatch(isLoading(false));
    })
    .catch((e) => {
      console.error("Не удается получить данные", e);
      setTimeout(() => loadCatalog()(dispatch), 2000);
    });
};

export default reducer;
