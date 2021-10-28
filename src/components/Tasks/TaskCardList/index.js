import React, { useContext, useState } from 'react'
import { AppContext } from '../../HOC'
import Modal from '../../Modal'
import TaskCard from '../TaskCard'
import './index.css'
import { AiFillPlusCircle } from 'react-icons/ai';

function TaskCardList({title,tasks}) {
    const { dispatcher, state } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);

    const addTaskCard = (newTodoCard) => {
        dispatcher({type: 'ADDNEWTODOCARD',payload:newTodoCard});
        setOpenModal(false);
    }

    return (
        <div className="tasksCardListContainer">
            <div className={state.switchToDarkMode ? "tasksCardListInfo-dark" : "tasksCardListInfo"}>
                <h1 className="title">{title}</h1>
                <button 
                    className="add-button" 
                    onClick={() => setOpenModal(true)}
                    style={{display:'inline-block'}}
                >
                    <AiFillPlusCircle className="plus-icon" />
                </button>
            </div>
            <div className={state.switchToDarkMode ? "tasksCardList-dark" : "tasksCardList"}>
            {/* <div className="tasksCardList"> */}
                {
                    tasks.map((task) => {
                        return (
                            <TaskCard key={new Date().getTime().toString()*Math.random()*1000} task={task}/>
                        )
                    })
                }
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
                    addTaskCard={addTaskCard}
                    method="post"
                />
            </div>
        </div>
    )
}

export default TaskCardList
