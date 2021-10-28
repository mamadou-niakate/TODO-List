import React, { useState } from 'react'
import './index.css';
import { MdUpdate } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';
import Modal from '../../Modal';

function TaskCard({task}) {
    const {title,description,date,priority} = task;
    const [openModal, setOpenModal] = useState(false);

    return (
        // <div className={ state ? "task-container-dark": "task-container"}>
        <div className="task-container">
            <div className="task-card">
                <h1 
                    className={
                        priority === "high" ? "high-priority" : 
                        priority === "medium" ? "medium-priority": "less-priority"
                    }
                >
                        {title}
                </h1>
                
                <p>{description}</p>

                <div className="date">
                    <p><MdUpdate /></p>
                    <p>{date}</p>
                </div>
            </div>
            <div className="action-buttons">
                <p><BiEdit style={{cursor:'pointer'}} onClick={() => setOpenModal(true)}/></p>
                <p><AiTwotoneDelete style={{cursor:'pointer'}}/></p>
            </div>
            <Modal 
                show={openModal} 
                setOpenModal={setOpenModal}
                task={task}
                method="put"
            />
        </div>
    )
}

export default TaskCard
