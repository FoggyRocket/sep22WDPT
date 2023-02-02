import { useState } from 'react';
import './App.css';
import { ListTask,FormTask } from './components';

function App() {
    //hook
    const [tasks, setTasks] = useState([
      { nameTask: "Ir al gym", status: true },
      { nameTask: "Recoger la casa", status: false },
      { nameTask: "Pasar a las bendis", status: false },
    ]);
  //Esta funcion debe retornar el numero de las tareas completadas
  const completedTask=()=>{
   //1)  filter y un length => [{...}].lenght => 1
   return tasks.filter((element)=> element.status === true ).length
          // tasks.filter((element)=> element.status === true ) = []
    //2) 
    /**
     * reduce task.reduce((acc,cv)=>{
     *  if(cv.status){
     *  return acc+=1
     *  }else{
     *  return acc
     * }
     * },0)
     */
  } 
            //param1=datos de la tarea, param2=index
  const done = (data,index) => {
    const newArr = [...tasks]
    newArr[index].status = !newArr[index].status

    setTasks(newArr)
  //setTasks(prevState =>  ) buscar si es posible con el prevState
    //    newArr.splice(index,1) ---> eliminar 
  };
  return (
    <div className="App">
      
      <FormTask completedTask={completedTask}/>
      <ListTask 
        tasks={tasks} done={done} 
        //{...{tasks,done}}
      />

    </div>
  );
}

export default App;
