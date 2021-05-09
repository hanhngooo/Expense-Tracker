const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANCTION":
      transactions = state.filter((t) => t.id !== action.payload);
      return transactions;

    case "ADD_TRANCTION":
      transactions = [action.payload, ...state];
      return transactions;
    default:
      break;
  }
};

export default contextReducer;
