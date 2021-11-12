import React, { useContext, useState } from 'react'
import { AppContext } from '../../HOC'
import Modal from '../../Modal'
import TaskCard from '../TaskCard'
import './index.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi';

function TaskCardList({title,tasks}) {

    const { state } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="tasksCardListContainer">
                <div className={`tasksCardListInfo ${state.switchToDarkMode ? "tasksCardListInfo-dark" : "tasksCardListInfo-light"}`}>
                    <h1 className="title">{title}</h1>
                    <BiDotsHorizontalRounded 
                        className="plus-icon" 
                        onClick={() => setOpenModal(true)}
                    />
                </div>
                <div className={`tasksCardList ${state.switchToDarkMode ? "tasksCardList-dark" : "tasksCardList-light"}`}>
                    {
                        tasks.map((task) => {
                            return (
                                <TaskCard 
                                    key={new Date().getTime().toString()*Math.random()*1000} 
                                    task={task}
                                    tasksGroupTitle={title}
                                />
                            )
                        })
                    }
                    <button 
                        className="add-card-btn"
                        onClick={() => setOpenModal(true)}
                    >
                        + Ajouter une carte
                    </button>              
                </div>
            </div>
            {openModal && (
                    <Modal 
                        show={openModal} 
                        setOpenModal={setOpenModal}
                        task={{
                            title:"",
                            description:"",
                            date:new Intl.DateTimeFormat().format(new Date().now),
                            priority:"medium",
                            status:"to do"
                        }}
                        method="post"
                        tasksGroupTitle={title}
                    />
                )}      
        </>
    )
}

export default TaskCardList
