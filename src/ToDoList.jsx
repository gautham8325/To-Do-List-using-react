import react,{ useState} from "react";

function ToDoList(){
const[tasks,setTasks] = useState([]);
const[newTask, setNewTask] = useState("");

function HandleInputChange(event){
    setNewTask(event.target.value);
}

function addTask(){
    if(newTask.trim() !== ""){
        setTasks(t=> [...tasks, newTask]);
    setNewTask("");
    }
    
}

function deleteTask(index){
    const updatedTasks = tasks.filter((_, indexx) =>indexx !== index);
    setTasks(updatedTasks);
}
function moveTaskUp(index){
    if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] =
        [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function moveTaskDown(index){
    if(index< tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index + 1]] =
        [updatedTasks[index + 1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
return (<div className="todolist"> 
    <h1> TO-DO-LIST</h1>
    <div> 
        <input 
        type="text" 
        placeholder="Enter a Task"
        value={(newTask)}
        onChange={HandleInputChange}/>
        <button 
        className="addbutton"
        onClick={addTask}>
            ADD
        </button>
    </div>
    <ol>
        {tasks.map((task, index)=> 
        <li key={index}>
            <span className="text">{task}</span>
            <button 
            className="delbutton"
            onClick={()=>deleteTask(index)}>
                Delete
            </button>
            <button 
            className="move"
            onClick={()=>moveTaskUp(index)}>
                👆
            </button>
            <button 
            className="move"
            onClick={()=>moveTaskDown(index)}>
                👇
            </button>
        </li>
        )}
    </ol>
</div>)
}

export default ToDoList