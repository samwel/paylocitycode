import React, {useContext, useState} from "react"
import { GlobalContext } from "../context/GlobalContext";

const DisplayEmployee = ({incomeTransaction}) => { 

    return (     
            <div className="transaction" >
             <span className="transaction-text">{incomeTransaction.employeeName} </span>                
        </div>
       
    )
}
export default DisplayEmployee