import React from 'react'
import TaskCard from '../TaskCard'
import './index.css'
function TaskCardList({title,tasks}) {
    return (
        <div className="tasksCardList">
            <h1 className="title">{title}</h1>
            {
                tasks.map((task) => {
                    return (
                        <TaskCard task={task}/>
                    )
                })
            }
            <div>
                <button className="add-button">+ Ajouter une carte</button>
            </div>
        </div>
    )
}

export default TaskCardList
