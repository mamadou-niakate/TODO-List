import React, { useState } from 'react'
import Modal from '../../Modal'
import TaskCard from '../TaskCard'
import './index.css'
function TaskCardList({title,tasks}) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="tasksCardList">
            <h1 className="title">{title}</h1>
            {
                tasks.map((task) => {
                    return (
                        <TaskCard key={new Date().getTime().toString()*Math.random()*1000} task={task}/>
                    )
                })
            }
            <div>
                <button className="add-button" onClick={() => setOpenModal(true)}>+ Ajouter une carte</button>
            </div>
             <Modal 
                show={openModal} 
                setOpenModal={setOpenModal}
                task={{
                    title:"",
                    description:"",
                    date:Date.now,
                    priority:"less",
                    status:"to do"
                }}
            />
        </div>
    )
}

export default TaskCardList
