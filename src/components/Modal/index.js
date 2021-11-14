import { useContext, useState } from 'react';
import { AppContext } from '../HOC';
import './modal.css';

const Modal = ({ setOpenModal, show, task, tasksGroupTitle, method }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { dispatcher, state } = useContext(AppContext)

  const [taskToWorkOn, setTaskToWorkOn] = useState(task);
  
  const handleInputChange = (event) => {
    setTaskToWorkOn({...taskToWorkOn,[event.target.name]:event.target.value})
  }

  const stopChildClickPropagation = (e) => {
    e.stopPropagation();
  }

  const handleSave = () => {
    if(method === "post") {
      dispatcher({type:"ADDNEWTODOCARD",payload:{taskToAdd:taskToWorkOn,tasksGroupleTitle:tasksGroupTitle}})
    } else if(method === "put") {
      dispatcher({type:"EDITTASK",payload:{taskToEdit:taskToWorkOn,tasksGroupleTitle:tasksGroupTitle}})
    }
    
    setOpenModal(false)
  }

  return (
    <div className={showHideClassName} onClick={() => setOpenModal(false)} style={{margin:0}}>
      <section className={`modal-main ${state.switchToDarkMode ? "modal-main-dark" : "modal-main-light"}`} onClick={stopChildClickPropagation}>
        <h2>Ajout/Modifier</h2>
        <div className="form-container">
          <form className="form">
            <p><input type="text" name="title" placeholder="Title" value={taskToWorkOn.title} onChange={handleInputChange}/></p>
            <p>
              <textarea name="description" placeholder="Description" value={taskToWorkOn.description} onChange={handleInputChange}> </textarea>
            </p>
            <p><input type="date" name="date" value={taskToWorkOn.date} onChange={handleInputChange}/></p>
            <div style={{marginTop:10}}>
              <select name="status" value={taskToWorkOn.status} onChange={handleInputChange}>
                <option value="to do">To do</option>
                <option value="in progress">In Progress</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div style={{marginTop:10}}>
              <select name="priority" value={taskToWorkOn.priority} onChange={handleInputChange}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="less">Less</option>
              </select>
            </div>
          </form>
          <div className="buttons-group">
            <button type="button" className="close" onClick={() => setOpenModal(false)}>
              Close
            </button>
            <button type="button" className="save" onClick={handleSave}>Save</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;