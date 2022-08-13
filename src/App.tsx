import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { TodoTask } from './components/TodoTask';
import { ITasks } from './interfaces/ITask';



const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<ITasks[]>([])

  const completeTask = (taskNameToDelete:string):void =>{
    setTaskList( taskList.filter((task)=>{
      return task.taskName !=taskNameToDelete
    }))
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
    
  }

  const addTask = (): void=>{
    const taskItem = {taskName: task}
    setTaskList([...taskList,taskItem])
    setTask('')
    console.log(taskList)
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen p-8 ">
      <header className='text-center'>
        <h1 className=' text-5xl sm:text-6xl uppercase font-bold'>To do list</h1>
        <span className='text-gray sm:text-xl'>Gerencie suas tarefas</span>
      </header>

  

<ul className='flex flex-col gap-8 overflow-y-auto min-h-[100px] max-h-[520px] sm:w-[60%] margin-x-auto text-center p-2'>

      {

        !taskList.length ? <div>
          <img src='/organize.png' className='w-[450px] sm:w-full'/>
          <h2 className='font-bold font-mont sm:text-xl text-sm'>Nenhuma tarefa criada ainda..</h2>
        </div> :
        taskList.map((item: ITasks, key:number)=>{
          return <TodoTask key={key} task={item} completeTask={completeTask}/>
        })

      }

</ul>


      <div className='flex flex-col items-center sm:gap-8 gap-2'>
        <input className='border p-2 w-[350px] sm:w-[500px] placeholder:p-4' value={task} type="text"  placeholder='Digite sua tarefa...' onChange={handleChange}/>
        <button className='bg-blue text-white w-[150px] h-[40px] text-lg rounded-lg shadow-xl' onClick={addTask}>CRIAR</button>
      </div>

      <footer>
        <span className='text-gray'> © Criado por Gabriel Pimenta</span>
      </footer>
    </div>
  );
}

export default App;
