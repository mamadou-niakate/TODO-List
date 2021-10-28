import React, { useContext } from 'react';
import Footer from '../../components/Footer';
import { AppContext } from '../../components/HOC';

import TaskCardList from '../../components/Tasks/TaskCardList';

function Tasks() {
  const { state } = useContext(AppContext)
  return (
      <div>
        <div className="content">
            <TaskCardList tasks={state.tasksTodo} title={"Todo"} />
            <TaskCardList tasks={state.tasksInProgress} title={"In Progress"} />
            <TaskCardList tasks={state.tasksComplete} title={"Complete"} />
        </div>
        <Footer />
      </div>
  );
}

export default Tasks
