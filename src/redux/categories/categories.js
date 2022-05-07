const STATUS_CHECKED = 'mv-bookstore/categories/STATUS_CHECKED';

const initialState = [];

// Action Creator
export const checkStatus = () => ({
  type: STATUS_CHECKED,
});

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
