import { useContext, useState } from 'react';
import { AppContext } from '../../HOC';
import './popup.css';

const Popup = ({ setOpenModal, show, tasksGroup, method }) => {
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
    <div className={showHideClassName} onClick={() => setOpenModal(false)}>
      <section className={`modal-main ${state.switchToDarkMode ? "modal-main-dark" : "modal-main-light"}`} onClick={stopChildClickPropagation}>
        <div className="form-container"> 
          <ul>
              <li>
                <span>Supprimer la liste</span>
              </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Popup;