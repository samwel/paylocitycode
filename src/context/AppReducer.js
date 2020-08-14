import Constants from "../Constants"
export default (state, action) =>{
    switch(action.type){
        case Constants.ADD_INCOME :
        return {
            ...state, 
            incomeTransactions: [action.payload],
        };
        case Constants.ADD_DEPENDENT :
        return {
            ...state,
            dependentsTransactions: [action.payload, ...state.dependentsTransactions],
        };
        case Constants.DELETE_DEPENDENTS:
            return{
                ...state,
                incomeTransactions: state.incomeTransactions.filter(
                    (incomeTransaction) =>incomeTransaction.id !== action.payload
                ),
                dependentsTransactions: state.dependentsTransactions.filter(
                    (dependentsTransaction) =>dependentsTransaction.id !== action.payload
                ),  
            }
        default: 
        return state;
    }
}