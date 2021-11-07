import React, { useContext } from 'react';
import { AppContext } from '../../components/HOC';
import TaskCardList from '../../components/Tasks/TaskCardList';
import './index.css';

function Tasks() {
  const { state } = useContext(AppContext);

  return (
    <div className={state.switchToDarkMode ? "content-dark" : "content"}>
      {
        state.tasks && state.tasks.map((tasksGroup) => {
          if(tasksGroup !== null) {
            const { title, tasks} = tasksGroup;
            return (
              <TaskCardList
                key={Math.random() * 1000}
                tasks={tasks || []}
                title={title || ''}
              />
            )
          }
          return null;
        })
      }
    </div>
  );
}

export default Tasks
