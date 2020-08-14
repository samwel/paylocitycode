import React, { useContext } from "react"
import Constants from "../Constants"
import { GlobalContext } from "../context/GlobalContext";

const EmpSalaryResult = () => {
    const { incomeTransactions, dependentsTransactions } = useContext(GlobalContext)

    const { PAYMENT_PER_PAYCHECKS, NUMBER_OF_PAYCHECKS_IN_YEAR } = Constants

    const incomeAmounts = incomeTransactions.map(
        incomeTransaction => incomeTransaction.incomeAmount
    )

    const dependentCosts = dependentsTransactions.map(
        dependentTransaction => dependentTransaction.dependentCost
    )
    const grossSalaryPerYear = (PAYMENT_PER_PAYCHECKS * NUMBER_OF_PAYCHECKS_IN_YEAR).toFixed(2);
    const deductionsbenefit = incomeAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const dependentTotalCost = dependentCosts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    var allExpenses = (dependentTotalCost * 1) + (deductionsbenefit * 1);

    const yourBalance = (grossSalaryPerYear - allExpenses).toFixed(2)
    return (
        <div className='transactions transactions-income'>

            <div className='some-page-wrapper'>
                <div className="table">
                    <div className="table__row -header">
                        <div className="table__column">Gross Salary Per Year</div>
                        <div className="table__column"> ${grossSalaryPerYear}</div>
                    </div>

                    <div className="table__row">
                        <div className="table__column">Benefits Deduction</div>
                        <div className="table__column"> ${deductionsbenefit}</div>
                    </div>

                    <div className="table__row">
                        <div className="table__column">Dependent Deductions</div>
                        <div className="table__column"> ${dependentTotalCost}</div>
                    </div>

                    <div className="table__row">
                        <div className="table__column">Net Salary Per Year</div>
                        <div className="table__column text-align">${yourBalance}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpSalaryResult