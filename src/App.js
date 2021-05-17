
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
  // keycode 13 is for using 'enter' button
  const inputKeyDown=(event)=>{
    if (event.keyCode===13)
        addNote();

  }

  const deleteTask= (index)=>{
  const newList = toDoList.filter((item,i)=> i!== index);
  updateToDoList(newList)
  }

  const markComplete = (index)=>{
    const list=[...toDoList];
    // copied toDoList into list
    list[index].isComplete = !list[index].isComplete;
    updateToDoList(list)
  }


  return (
    <div className="app-background">
      <p className="heading-text">To-Do-List</p>
      <div className="task-container">
        <div>
        <input className="text-input" value={taskInput} onKeyDown={inputKeyDown}   //onKeyDown is for enter
        onChange={(event)=>updateTaskInput(event.target.value)} />
        <button className="add-button" onClick={addNote}>ADD</button>
        </div>

        {toDoList?.length?toDoList.map((toDoObject,index)=>
        
        <ListItem index={index} itemData={toDoObject} deleteTask={deleteTask} markComplete={markComplete} />):
        
        <p className="no-item-text">No Task Added!</p>} 
        
      </div>
      <p className="footer-text">Shubham</p>
    </div>
    
  );
}

function ListItem(props){
  return (
  <div classname="list-item row jc-space-between">
    <span className={props.itemData.isComplete?"task-complete":""}
    onClick={()=>props.markComplete(props.index)}> 
    {props.itemData.description }</span>
    {/* returning different input values */}
    <img src={dustbinicon} className="delete-icon" onClick={()=>props.deleteTask(props.index)}/>

  </div>
    );
}



export default App;
