import React, { useState } from 'react';

import { Card } from '../UI/Card';
import { ExpenseItem } from './ExpenseItem';
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterByYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterByYearHandler}
        />
        {props.items.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export { Expenses };
