
import React, {useState} from "react";
import dustbinicon from './dustbin.png'



function App() {
  const[taskInput, updateTaskInput]=useState("");
  const [toDoList,updateToDoList]=useState([]);
  
  const addNote=()=>{
    toDoList.push({description: taskInput})
    updateToDoList(toDoList)
    updateTaskInput("")

  }

  const deleteTask= (index)=>{
  const newList = toDoList.filter((item,i)=> i!== index);
  updateToDoList(newList)



  }

  return (
    <div className="app-background">
      <p className="heading-text">To-Do-List</p>
      <div className="task-container">
        <div>
        <input className="text-input" value={taskInput} 
        onChange={(event)=>updateTaskInput(event.target.value)} />
        <button className="add-button" onClick={addNote}>ADD</button>
        </div>

        {toDoList?.length?toDoList.map((toDoObject,index)=>
        
        <ListItem index={index} itemData={toDoObject} deleteTask={deleteTask}/>):
        
        <p className="no-item-text">No Task Added!</p>} 
        
      </div>
      <p className="footer-text">Shubham</p>
    </div>
    
  );
}

function ListItem(props){
  return (
  <div classname="list-item row jc-space-between">
    <span>{props.itemData.description }</span>
    {/* returning different input values */}
    <img src={dustbinicon} className="delete-icon" onClick={()=>props.deleteTask(props.index)}/>

  </div>
    );
}



export default App;
