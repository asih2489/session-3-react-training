import { DELETE_ITEM } from "../actions/home";

const defaultState = [
  {
    id: 14,
    name: "Jackets",
    image: null,
    url_path: "men/tops-men/jackets-men",
    __typename: "CategoryTree",
  },
  {
    id: 15,
    name: "Hoodies & Sweatshirts",
    image: null,
    url_path: "men/tops-men/hoodies-and-sweatshirts-men",
    __typename: "CategoryTree",
  },
  {
    id: 16,
    name: "Tees",
    image: null,
    url_path: "men/tops-men/tees-men",
    __typename: "CategoryTree",
  },
  {
    id: 17,
    name: "Tanks",
    image: null,
    url_path: "men/tops-men/tanks-men",
    __typename: "CategoryTree",
  },
];
const homeReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_ITEM:
      let idx = null;
      for (let index = 0; index < state.length; index++) {
        const element = state[index];
        if (element.id === payload) {
          idx = index;
        }
      }
      state.splice(idx, 1);
      return Object.assign([], state);
    default:
      return state;
  }
};

export default homeReducer;
