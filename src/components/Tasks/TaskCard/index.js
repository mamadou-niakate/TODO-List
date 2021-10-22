import React from 'react'
import './index.css';
import { MdUpdate } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';

function TaskCard({task}) {
    const {title,description,date,priority} = task;
    return (
        <div className="container">
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
            <div>
                <p><BiEdit style={{cursor:'pointer'}}/></p>
                <p><AiTwotoneDelete style={{cursor:'pointer'}}/></p>
            </div>
        </div>
    )
}

export default TaskCard
