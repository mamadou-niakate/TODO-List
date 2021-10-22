import React, { useReducer } from "react";
import { tasks } from '../data';
import { getFilterService } from '../services/filter.service';

const AppContext = React.createContext();


const reducer = (state,action) => {
  if(action.type === "COLLAPSE") {
    return {...state,collapse:true};
  } else if( action.type === "UNCOLLAPSE") {
    return {...state,collapse:false};
  }
}
const defaultState = {
  tasksTodo: getFilterService.filterDataByStatus(tasks,"to do"),
  tasksInProgress: getFilterService.filterDataByStatus(tasks,"in progress"),
  tasksComplete: getFilterService.filterDataByStatus(tasks,"complete"),
  collapse: true
}

const ContextProvider = ({children}) => {
    const [state,dispatcher] = useReducer(reducer,defaultState);
    return (
        <AppContext.Provider value={{state,dispatcher}}>
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext }