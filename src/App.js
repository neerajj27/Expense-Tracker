
import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/NewExpenses/NewExpense';

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: '250',
        date: new Date(2021, 5, 21)
    },
    {
        id: 'e2',
        title: 'Book Fee',
        amount: '150',
        date: new Date(2021, 4, 21)
    },
    {
        id: 'e3',
        title: 'House Rent',
        amount: '500',
        date: new Date(2021, 3, 21)
    },
    {
        id: 'e4',
        title: 'Food Fee',
        amount: '300',
        date: new Date(2021, 2, 21)
    }
];


const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {

        const updateExpense = [expense, ...expenses];

        setExpenses(updateExpense);
    };

    return (
    <div className="app-container">
        <NewExpense  onAddExpense = {addExpenseHandler}/>
        <Expenses item={expenses}/>
    </div>
    );
}

export default App;