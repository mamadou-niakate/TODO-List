import React, { useContext } from 'react';
import { AppContext } from '../../components/HOC';
import TaskCardList from '../../components/Tasks/TaskCardList';
import './index.css';

function Tasks() {
  const { state } = useContext(AppContext);

  return (
    <div className="content">
        <TaskCardList tasks={state.tasksTodo} title={"Todo"} />
        <TaskCardList tasks={state.tasksInProgress} title={"In Progress"} />
        <TaskCardList tasks={state.tasksComplete} title={"Complete"} />
    </div>
  );
}

export default Tasks
