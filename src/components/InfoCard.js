import React from "react";
const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Press and hold.Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "$100 " : "$50 "}
      into category {isIncome ? "Salary " : "Food "}
      on {isIncome ? "Monday" : "Tuesday"}.
    </div>
  );
};

export default InfoCard;
