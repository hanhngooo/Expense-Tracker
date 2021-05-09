import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = [];
export const ExpenseTrackerContext = createContext();

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action Creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (id) =>
    dispatch({ type: "ADD_TRANSACTION", payload: id });
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
