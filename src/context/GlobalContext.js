import React, { createContext, useRef, useReducer } from 'react'
import AppReducer from "./AppReducer"
import Constants from "../Constants"

const initialState = {
 incomeTransactions: [],     
 dependentsTransactions: [  ],
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addIncome = (incomeTransaction) => {
      
        dispatch({
            type: Constants.ADD_INCOME,
            payload: incomeTransaction
        })
    }

    const addDependent = (dependentsTransaction) => {
        dispatch({
            type: Constants.ADD_DEPENDENT,
            payload: dependentsTransaction
        })
    }

    const deleteDependent = (id) => {
        dispatch({
            type: Constants.DELETE_DEPENDENTS,
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            dependentsTransactions: state.dependentsTransactions,
            addIncome,
            addDependent,
            deleteDependent
        }}>
            {children}
        </GlobalContext.Provider>
    )
}