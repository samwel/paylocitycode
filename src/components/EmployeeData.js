import React, { useContext, useReducer } from 'react';
import IncomeTransactions from "./DisplayEmployee";
import { GlobalContext } from "../context/GlobalContext";

const EmployeeData = () => {
    const { incomeTransactions } = useContext(GlobalContext)

    return (
        <div className="transactions transactions-income">
            <ul className="transaction-employee">
                {incomeTransactions.map(incomeTransaction => (
                    <IncomeTransactions  incomeTransaction={incomeTransaction}
                    />
                ))}

            </ul>
        </div>
    )
}

export default EmployeeData