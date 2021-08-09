import React, { useState } from 'react';

import { Card } from '../UI/Card';
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';
import { ExpensesList } from './ExpensesList';
import './Expenses.css';
import { ExpensesChart } from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterByYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((item) => {
    if (filteredYear === 'All') {
      return props.items;
    }
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterByYearHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export { Expenses };
