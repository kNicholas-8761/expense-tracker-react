import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const saveSelectedData = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveSelected={saveSelectedData} selected={year} />

        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
