//import React from 'react' unicamente es  cuando utilizamos componentes class
import { useState } from "react";
import { Task } from "../../components";
export default function ListTask({tasks,done}) {


  //listas dinamicas con Array.map() ===> #each
  return (
    <div>
      <h2>Tareas por completar </h2>
      <ul id="myUL">
        {tasks.map((task, index_task) => (
          <Task
            key={index_task}
            //1) {...task}
            //2) task={task}
            //3)
            nameTask={task.nameTask}
            status={task.status}
            done={()=>done(task,index_task)}
          />
        ))}
      </ul>
    </div>
  );
}

//export default ListTask
