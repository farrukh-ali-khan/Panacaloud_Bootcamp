import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Header } from "./ExpenseTrackerComponent/Header";
import { Balance } from "./ExpenseTrackerComponent/Balance";
import { IncomeExpenses } from "./ExpenseTrackerComponent/IncomeExpenses";
import { TransactionList } from "./ExpenseTrackerComponent/TransactionList";
import { AddTransaction } from "./ExpenseTrackerComponent/AddTransaction";
import { GlobalProvider } from "./ExpenseTrackerComponent/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
