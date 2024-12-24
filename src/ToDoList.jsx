import React, {useState} from 'react';

function ToDoList(){
    const[tasks, setTasks] = useState(["Take a bath", "Eat breakfast", "Go shopping"]);
    const[newTask, setNewTask] = useState();

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim !==""){
         setTasks([...tasks, newTask]);
         setNewTask();
        }
    }
    function deleteTask(index){
         const eliminate = tasks.filter((_, i)=> i !==index);
         setTasks(eliminate);
    }
    function moveTaskUp(index){
      if(index > 0){
        const moveTask = [...tasks];
        [moveTask[index], moveTask[index - 1]] = 
        [moveTask[index - 1], moveTask [index]]; 
        setTasks(moveTask);
      }
    }
    function moveTaskDown(index){
             if(index < tasks.length - 1){
                  const moveTask = [...tasks];
                  [moveTask[index], moveTask[index + 1]] = 
                  [moveTask[index + 1], moveTask[index]];
                  setTasks(moveTask);
             }
            }
    
    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter new Task"
            value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((tasks, index) => 
     <li key={index}><span className="text">{tasks}</span>
            <button className="Delete" onClick={() => deleteTask(index)}> Delete
                </button>
                <button className="Move" onClick={()=>moveTaskUp(index)}>
                    👆
                </button>
                <button className="Move" onClick={()=>moveTaskDown(index)}>
                    👇
                </button>
                </li>
            )}
        </ol>
    </div>

    )
}

export default ToDoList 