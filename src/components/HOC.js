import React, { useReducer } from "react";
import { getFilterService } from '../services/filter.service';
import tasksService from '../services/localStorage.service';

const AppContext = React.createContext();


const reducer = (state,action) => {
  if(action.type === "COLLAPSE") {

    return {...state,collapse:true};

  } else if( action.type === "UNCOLLAPSE") {

    return {...state,collapse:false};

  } else if(action.type === "ADDNEWTODOCARD") {

    const { status } = action.payload;
    
    action.payload.id = new Date().getTime() * Math.random() * 10000;
    tasksService.addTask(action.payload);
    const tasksOfTheStatus = getFilterService.filterDataByStatus(status);
    
    if(status === "to do") state.tasksTodo = tasksOfTheStatus;
    if( status === "in progress")  state.tasksInProgress = tasksOfTheStatus;
    if (status === "complete")  state.tasksComplete = tasksOfTheStatus; 
    
    return {...state};

  } else if(action.type === "EDITTASK") {

    const { status } = action.payload;
    tasksService.updateTask(action.payload);
    const tasksOfTheStatus = getFilterService.filterDataByStatus(status);
    
    if(status === "to do") state.tasksTodo = tasksOfTheStatus;
    if(status === "in progress")  state.tasksInProgress = tasksOfTheStatus; 
    if(status === "complete") state.tasksComplete = tasksOfTheStatus; 
    window.location.reload();
    return {...state};

  } else if(action.type === "REMOVETASK") {

    const { id, status } = action.payload;
    tasksService.removeTask(id);
    const tasksOfTheStatus = getFilterService.filterDataByStatus(status);
    
    if(status === "to do") state.tasksTodo = tasksOfTheStatus;
    if(status === "in progress")  state.tasksInProgress = tasksOfTheStatus; 
    if(status === "complete") state.tasksComplete = tasksOfTheStatus; 

    return {...state};

  } else if (action.type === "SWITCHTODARKMODE") {

    state.switchToDarkMode = true;
    return {...state};

  } else if (action.type === "SWITCHTONORMALMODE") {

    state.switchToDarkMode = false;
    return {...state};

  }
}
const defaultState = {
  tasksTodo: getFilterService.filterDataByStatus("to do"),
  tasksInProgress: getFilterService.filterDataByStatus("in progress"),
  tasksComplete: getFilterService.filterDataByStatus("complete"),
  collapse: true,
  switchToDarkMode: false
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