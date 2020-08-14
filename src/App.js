import React from "react"
import EmployeeRequirement from './components/EmployeeDescriptions'
import EmpSalaryResult from './components/EmpSalaryResult'
import AddTransation from './components/AddTransation'
import EmployeeData from "./components/EmployeeData"
import DependentList from "./components/DependentList"
import './App.css';
import { GlobalContextProvider } from "./context/GlobalContext"
const App = () => {
    return (
        <GlobalContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <EmployeeRequirement />
                    <EmpSalaryResult />
                    <AddTransation />
                    <EmployeeData />
                    <DependentList />
                </div>
            </div>
        </GlobalContextProvider>
    )
}

export default App