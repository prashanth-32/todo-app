import { useState } from "react"
import imgSrc from "./assets/to-do-list.png"
import addSrc from "./assets/add.png"
import editSrc from "./assets/pencil.png"
import deleteSrc from "./assets/delete.png"

function App() {
  const [tasks,setTasks] = useState([]);
  
  const handleAdd = () =>{
    let task = document.querySelector("#id").value;
    document.querySelector("#id").value = "";
    task = task.trim();
    if(task.length == 0) return;
    console.log(task);
    setTasks([...tasks,task]);
  }
  const handleEdit = (index) => {
    let task = tasks[index];
    handleDelete(index);
    document.querySelector("#id").value = task;
    document.getElementById("id").focus();
  }
  const handleDelete = (index) => {
    let newTasks = tasks.filter((task,i) => index != i);
    setTasks(newTasks);
  }
  return (
    <>
    <div className="bg-amber-300 w-full min-h-screen">
      <div className="flex flex-row h-10 w-full justify-center items-center text-2xl gap-2 font-bold pt-16">
        <p>ToDo List</p>
        <img src={imgSrc} alt="" className="h-10 w-10" />
      </div>
      <div className="mt-16 flex flex-row justify-center w-full">
        <input type="text" name="" id="id" placeholder="Add your task" className="bg-slate-100 h-20 p-5 w-1/3 rounded-3xl text-xl shadow-lg shadow-cyan-500/50"/>
        <img src={addSrc} alt="" className="w-16 cursor-pointer" onClick={handleAdd}/>
      </div>
      { tasks.length == 0 ? <div className="w-full font-bold text-gray-50 text-2xl text-center pt-16">Add tasks !</div> : 
      <div className="flex flex-col w-full justify-center items-center text-xl mt-5 font-bold text-gray-50 gap-5">
        <h3>Tasks to be completed : </h3>
        {
          tasks.map((task,i) => <div key={i} className="bg-slate-100 rounded-lg w-1/2 gap-5 flex flex-col text-gray-950 justify-center font-normal box-border">
            <div className="flex flex-row justify-between p-5 flex-wrap">
              {task}
              <div className="flex flex-row gap-5 box-border">
                <img src={editSrc} onClick={() => handleEdit(i)} alt="" className="h-5 w-5 cursor-pointer"/>
                <img src={deleteSrc} onClick={() => handleDelete(i)} alt="" className="h-5 w-5 cursor-pointer"/>
              </div>
            </div>
          </div> )
        }
      </div>
      }
      </div>
    </>
  )
}

export default App
