import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AppTask from './components/AppTask'
const App =()=> {
  const [showAppTask,setShowAppTask]=useState(false)
  const [tasks,setTasks]=useState([])
  //add task
  const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)
    const newTask={id,...task}
setTasks([...tasks,newTask])
  }

  //for deletion after the task is done
  const deleteTask=(id)=>{
    console.log("delete id: " + id);
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //toggle means if reminder is on then make it off
  const toggleReminder=(id)=>{
    console.log('function called');
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }

  return (
    <div className="container">
   <Header title='Task Tracker' onAdd={()=>setShowAppTask(!showAppTask)} showApp={showAppTask}/>
   {showAppTask && <AppTask onAdd={addTask}/>}
   {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} />:'no tasks to show'} 
    </div>
  );
}

export default App;
