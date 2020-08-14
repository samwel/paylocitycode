import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalContext";
import DependentTransactions from "./DependentsTransactions";

const DependentList = () => {
    const { dependentsTransactions } = useContext(GlobalContext)
    return (
        <div className="transactions transactions-dependent">
            <h2>Dependents List</h2>
            <ul className="transaction-employee">
            {dependentsTransactions.map(dependentsTransaction => (            
                <DependentTransactions
                 key={dependentsTransaction.id} 
                 dependentsTransaction ={dependentsTransaction} 
                />
                ))}
            </ul>
        </div>
    )
}

export default DependentList