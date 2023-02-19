import { createStore } from "redux";
const initialState = { title: "Recomendações" };
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD-TITLE":
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
