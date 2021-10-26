import React, { useReducer } from "react";
import { tasks } from '../data';
import { getFilterService } from '../services/filter.service';

const AppContext = React.createContext();


const reducer = (state,action) => {
  if(action.type === "COLLAPSE") {
    return {...state,collapse:true};
  } else if( action.type === "UNCOLLAPSE") {
    return {...state,collapse:false};
  } else if(action.type === "ADDNEWTODOCARD") {
    state.tasksTodo.push(action.payload);
    return {...state};
  } else if(action.type === "EDITTASK") {
    const {id,status} = action.payload;
    if(status === "to do") {
      const newTasksTodo = state.tasksTodo.map((taskTodo) => {
        if(taskTodo.id === id) {
          return action.payload;
        }
        return taskTodo
      })
      state.tasksTodo = newTasksTodo;
    } 
    if(status === "in progress") {
      const newTasksInprogress = state.tasksInProgress.map((taskInProgress) => {
        if(taskInProgress.id === id) {
          return action.payload;
        }
        return taskInProgress
      })
      state.tasksInProgress = newTasksInprogress;
    }
    if(status === "complete") {
      const newTasksComple = state.tasksComplete.map((taskComplete) => {
        if(taskComplete.id === id) {
          return action.payload;
        }
        return taskComplete
      })
      state.tasksComplete = newTasksComple;
    }
    return {...state}
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