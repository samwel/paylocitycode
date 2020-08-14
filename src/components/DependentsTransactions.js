import React, {useContext, useState} from "react"
import { GlobalContext } from "../context/GlobalContext";

const DependentsTransactions = ({dependentsTransaction}) => {
    const {deleteDependent} = useContext(GlobalContext);
    return (
     
            <li className="transaction" >
                <span className="transaction-text">{dependentsTransaction.dependentName} </span>
                <span className="transaction-amount">${dependentsTransaction.dependentCost}</span>
                <button className="delete-btn" onClick={() => deleteDependent(dependentsTransaction.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
       
    )
}


export default DependentsTransactions