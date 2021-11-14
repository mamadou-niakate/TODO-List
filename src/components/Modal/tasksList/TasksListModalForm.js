import { useContext, useState } from 'react';
import { AppContext } from '../../HOC';
import './tasksListModalForm.css';

const TasksListModalForm = ({ setOpenModal, show, tasksGroup, method }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { dispatcher, state } = useContext(AppContext)

  const [tasksGroupToWorkOn, setTasksGroupToWorkOn] = useState(tasksGroup);
  
  const handleInputChange = (event) => {
    setTasksGroupToWorkOn({...tasksGroupToWorkOn,[event.target.name]:event.target.value})
  }

  const stopChildClickPropagation = (e) => {
    e.stopPropagation();
  }

  const handleSave = () => {
    if(method === "post") {
      dispatcher({type:"ADDNEWTASKSGROUP",payload:tasksGroupToWorkOn})
    } else if(method === "put") {
      dispatcher({type:"EDITTASKSGROUP",payload:tasksGroupToWorkOn})
    }
    
    setOpenModal(false)
  }

  return (
    <div className={showHideClassName} onClick={() => setOpenModal(false)} style={{zIndex:10, margin:0}}>
      <section className={`modal-main ${state.switchToDarkMode ? "modal-main-dark" : "modal-main-light"}`} onClick={stopChildClickPropagation}>
        <h2>Ajout/Modifier</h2>
        <div className="form-container"> 
          <form className="form">
            <p><input type="text" name="title" placeholder="Title" value={tasksGroupToWorkOn.title} onChange={handleInputChange}/></p>
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

export default TasksListModalForm;