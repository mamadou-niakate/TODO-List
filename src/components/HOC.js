import React, { useReducer } from "react";
import tasksService from '../services/localStorage.service';

const AppContext = React.createContext();
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const reducer = (state,action) => {
  if(action.type === "COLLAPSE") {

    return {...state,collapse:true};

  } else if( action.type === "UNCOLLAPSE") {

    return {...state,collapse:false};

  } else if(action.type === "ADDNEWTODOCARD") {

    const { taskToAdd, tasksGroupleTitle } = action.payload;
    taskToAdd.id = new Date().getTime() * Math.random() * 100000000;
    const newStateTasks = tasksService.addTask(tasksGroupleTitle,taskToAdd);
    return {...state,tasks:newStateTasks};

  } else if(action.type === "EDITTASK") {

    const { taskToEdit, tasksGroupleTitle } = action.payload;
    tasksService.updateTask(tasksGroupleTitle,taskToEdit);
    const newStateTasks = tasksService.getTasks();
    window.location.reload();
    return {...state,tasks:newStateTasks};

  } else if(action.type === "REMOVETASK") {

    const { id } = action.payload;
    tasksService.removeTask(id);    
    const newStateTasks = tasksService.getTasks();
    return {...state, tasks:newStateTasks};

  } else if (action.type === "SWITCHTODARKMODE") {

    state.switchToDarkMode = true;
    return {...state};

  } else if (action.type === "SWITCHTONORMALMODE") {

    state.switchToDarkMode = false;
    return {...state};

  }
}

const defaultState = {
  tasks: tasksService.getTasks(),
  collapse: true,
  switchToDarkMode: isDarkMode,
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