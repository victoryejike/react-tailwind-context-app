import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialstate = {
    employees: [
        {
            id: 1,
            name: 'John Stones',
            location: 'Kobo360',
            designation: 'Badass Frontend Guy'
        }
    ]
}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialstate)

    const addEmployee = (employee) => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        })
    }

    const editEmployee = (employee) => {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employee
        })
    }

    const removeEmployee = (id) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            employees: state.employees,
            addEmployee,
            editEmployee,
            removeEmployee
        }}>
            { children }
        </GlobalContext.Provider>
    )
}


