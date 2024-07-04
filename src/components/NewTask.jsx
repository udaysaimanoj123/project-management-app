import { useState} from "react";
export default function NewTask({addTask,delTask}){
    const [taskInput,settask]=useState(" ");
    function handletask(name){
        settask(name);
    }
    function handleAddtask(){
      if(taskInput.trim()===''){
        return ;
      }
        addTask(taskInput);
        settask('');
    }
    return(
        <div className="flex items-center gap-4">
            <input  value={taskInput} onChange={(e)=>handletask(e.target.value)} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={handleAddtask} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
};