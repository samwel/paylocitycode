import React, { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Constant from "../Constants"
const AddTransation = () => {
const { addIncome, addDependent } = useContext(GlobalContext);

const {DEPENDENT_COST_PER_YEAR, DISCOUNT_EMPL_DEP, NAME_START_WITH_A, EMPL_COST_BENEFIT_PER_YEAR} = Constant;

const [employee, setEmployee] = useState({ employeeName: "", incomeAmount: 0  })
    const { employeeName} = employee

    const onChangeIncome = e => {
        setEmployee({[e.target.name]: e.target.value });
       
    }

    const onSubmitIncome = e => {
        e.preventDefault();     
        if (employeeName !== "") {
            var firstChar = employeeName.charAt(0);           
            var benefits = EMPL_COST_BENEFIT_PER_YEAR;
            if(firstChar.toUpperCase() === NAME_START_WITH_A){
                benefits = benefits - ( benefits * DISCOUNT_EMPL_DEP);               
            } 
                     
            const newIncomeTransaction = {
                id: Date.now(),
                employeeName,
                incomeAmount: benefits * 1
            }

            addIncome(newIncomeTransaction);
            setEmployee({
                employeeName: '',
                incomeAmount: 0
            })
        }
    }

    const [dependent, setDependent] = useState({dependentName: "", })
    const { dependentName } = dependent

    const onChangeDependent = e => {
        setDependent({ ...dependent, [e.target.name]: e.target.value });
 
    }

    const onSubmitDepedent = e => {
        e.preventDefault();
        if (dependentName !== "") {
            var firstChar = dependentName.charAt(0);           
            var dependentCost = DEPENDENT_COST_PER_YEAR;
            if(firstChar.toUpperCase() === NAME_START_WITH_A){
                dependentCost = dependentCost - ( dependentCost * 0.1);               
            }
            const newDependentTransaction = {
                id: Date.now(),
                dependentName: dependentName,
                dependentCost: dependentCost * 1
            }

            addDependent(newDependentTransaction);
            setDependent( { dependentName: "",  })
        }
    }


    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome} >
                <div className="input-group dependent">
                    <input type="text"
                        name="employeeName"
                        value={employeeName}
                        placeholder="Enter your name..."
                        autoComplete="off"
                        onChange={onChangeIncome}
                    />
                   
                    <input type="submit" value="Add Employee" />
                </div>
            </form>

            <form onSubmit={onSubmitDepedent} >
                <div className="input-group dependent">
                    <input type="text"
                        name="dependentName"
                        value={dependentName}
                        placeholder="Enter dependent name..."
                        autoComplete="off"
                        onChange={onChangeDependent}
                    />                  
                    <input type="submit" value="Add Dependent" />
                </div>
            </form>

        </div>
    )
}

export default AddTransation