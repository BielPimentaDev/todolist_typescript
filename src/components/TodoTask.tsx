import React, { FC, useState } from 'react'
import { ITasks } from '../interfaces/ITask'

interface Props{
    task: ITasks;
    completeTask(taskNameToDelete:string): void;

}

export const TodoTask = ({task, completeTask}:Props) => {
    const [isFinished, setIsFinished] = useState<boolean>(false)

    const finishTask = ()=>{
        setIsFinished(curr=> !curr)
        console.log(isFinished)
    }
    

  return (

    <li className= {`shadow-lg w-full flex justify-between gap-4 items-center pl-4 ${isFinished && 'bg-graylight '}`}>
        <input type="checkbox" onClick={finishTask} className='text-white  cursor-pointer w-[30px] h-[30px]'/>
        <span className={`${isFinished && 'bg-graylight line-through'}`}>{task.taskName}</span>
        <button onClick={()=> completeTask(task.taskName)} className='bg-red text-white p-4'>x</button>

        </li>
  )
}
