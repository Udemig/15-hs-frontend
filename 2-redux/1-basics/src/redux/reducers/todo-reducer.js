const initialState = {
  todos: [],
  isLoading: true,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // todo:
    case "X":
      return state;
    case "Y":
      return state;
    case "Z":
      return state;
    default:
      return state;
  }
};

export default todoReducer;
