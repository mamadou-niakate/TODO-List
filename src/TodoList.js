import React, { useRef, useState, useReducer } from 'react';
import TaskCard from './components/Tasks/TaskCard';

const jours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const mois = ["Jan.","Fév.","Mars","Avr.","Mai","Juin","Jul","Août","Sept.","Oct.","Nov.","Déc."];


const reducer = (state,action) => {
  if(action.type === "BUTTON_CLICK") {
    const newItems = [...state.items,action.payload];
    return {...state, items:newItems}; 
  }
  if(action.type === "REMOVE_ITEM") {
    const newItems = state.items.filter((item) => item.id !== action.payload);
    return {...state, items:newItems};
  }
}

const TodoList = ({ data }) => {
  const [state, dispatch] = useReducer(reducer,{items:data,enableDisableButton:true})
  const [EnableDisableButton, setEnableDisableButton]= useState(true);

  let nameRef = useRef(null);
  let descRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(nameRef.current.value !== "" && descRef.current.value !== "") {
      dispatch({
        type:"BUTTON_CLICK",
        payload:{
          id:new Date().getTime().toString(),
          title:nameRef.current.value, 
          description:nameRef.current.value, 
          date:  Date.now(),
      }})
      
      nameRef.current.value = ""
      descRef.current.value = "";
    }
  }

  const handleChange = () => {
    if(nameRef.current.value === "" || descRef.current.value === "") {
      setEnableDisableButton(true)
    } else {
      setEnableDisableButton(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
          <div>
                <p>
                    <label htmlFor="name"> Name </label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      ref={nameRef} 
                      onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="description"> Description </label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description" 
                        ref={descRef}
                        onChange={handleChange}
                    />
                </p>
                <p>
                  <button type="submit" disabled={EnableDisableButton} >
                    Add
                  </button>
                </p>
          </div>
      </form>
      <div>
        <ul>
          {
            state.items.map(todo => {
              const {id,title,description,date} = todo;
              return (
                <div key={id}>
                  <TaskCard task={todo}/>
                  {/* <li>
                    <p> { title } - {description} - {`${jours[new Date(date).getDay()]} ${mois[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`} </p>
                    <button onClick={() => dispatch({type:"REMOVE_ITEM",payload:id})}>Remove</button>
                  </li> */}
                </div>
              )
            })
          }
        </ul>
    </div> 
  </div>
  )
}

export default TodoList;