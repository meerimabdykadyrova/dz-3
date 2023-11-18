import './App.css';
import {useState} from "react";

function App() {
  const [inputData, setInputData] = useState('')
  const [tasks, setTasks] = useState([])


    const addTask = () => {
      setTasks([...tasks,inputData])
      console.log(tasks)
    }


  return (
    <div className="App">
      <input type="text" value={inputData} onChange={e => setInputData(e.target.value)}/>
      <button onClick={addTask}>Add task</button>

        <div>
            {tasks.map((task, key) => (
                <p key={key}>{task}</p>
            ))}
        </div>
      
    </div>
  );
}

export default App;
