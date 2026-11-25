
import { useState } from 'react';
import './App.css'

function Arr(){
    const [tasks, setTasks] = useState([
        {id: 1501, name: "Record Created", status:"false"},
        {id: 1502, name: "Record Edited", status:"true"},
        {id: 1503, name: "Record Deleated", status:"false"},
    ])
    const [show, showTask] =useState(true);
function handleDelete(id){
    setTasks(tasks.filter(task => id !== task.id))
}
return(
    <div className='Arr'>
        <h1>Tasks List</h1>
        
        <ul>
            <button className='trigger' onClick={() => showTask(!show)}>Toggle</button>
            { show && tasks.map((task) => (
            <li key={task.id} className={task.status ? "true" : "false"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
            </li>
            ))}
        </ul>
    </div>
)
}
export default Arr