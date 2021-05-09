import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTrackerContext = createContext();

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  //Action Creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (id) =>
    dispatch({ type: "ADD_TRANSACTION", payload: id });

  const balance = transactions.reduce((acc, currentValue) => {
    return currentValue.type === "Expense"
      ? acc - currentValue.amount
      : acc + currentValue.amount;
  }, 0);
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
