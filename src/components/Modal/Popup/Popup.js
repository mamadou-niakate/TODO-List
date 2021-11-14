import { useContext } from 'react';
import { AppContext } from '../../HOC';
import './popup.css';

const Popup = ({ setOpenModal, show, tasksGroup, method }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { state } = useContext(AppContext)
  
  const stopChildClickPropagation = (e) => {
    e.stopPropagation();
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