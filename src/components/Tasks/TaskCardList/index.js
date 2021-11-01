import React, { useContext, useState } from 'react'
import { AppContext } from '../../HOC'
import Modal from '../../Modal'
import TaskCard from '../TaskCard'
import './index.css'
import { AiFillPlusCircle } from 'react-icons/ai';

function TaskCardList({title,tasks}) {
    const { state } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="tasksCardListContainer">
            <div className={state.switchToDarkMode ? "tasksCardListInfo-dark" : "tasksCardListInfo"}>
                <h1 className="title">{title}</h1>
                <AiFillPlusCircle 
                    className="plus-icon" 
                    onClick={() => setOpenModal(true)}
                />
            </div>
            <div className={state.switchToDarkMode ? "tasksCardList-dark" : "tasksCardList"}>
                {
                    tasks.map((task) => {
                        return (
                            <TaskCard key={new Date().getTime().toString()*Math.random()*1000} task={task}/>
                        )
                    })
                }

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
                    />
                )}                    
            </div>
        </div>
    )
}

export default TaskCardList
