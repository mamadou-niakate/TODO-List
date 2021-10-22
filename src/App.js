import React, { useEffect, useReducer, useState } from 'react';
import './App.css';

import { tasks } from './data';
import TodoList from './TodoList';
import { getFilterService } from './services/filter.service';
import TaskCardList from './components/Tasks/TaskCardList';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';

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
function App() {
  return (
    <div>
      <Test/>
    </div>
  );
}

const Test = () => {
  const [state,dispatcher] = useReducer(reducer,defaultState);
  const [collapse, setCollapse] = useState(state.collapse);

  useEffect(() => {
    setCollapse(state.collapse)
  },[state.collapse])

  return (
    <div className="App">
      <div className="main">
        <Sidebar dispatcher={dispatcher} collapse={collapse}/>
        <main>
          <Appbar dispatcher={dispatcher} state={state} />
          <div className="content">
              <TaskCardList tasks={state.tasksTodo} title={"Todo"} />
              <TaskCardList tasks={state.tasksInProgress} title={"In Progress"} />
              <TaskCardList tasks={state.tasksComplete} title={"Complete"} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;