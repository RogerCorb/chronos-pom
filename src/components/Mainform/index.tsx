import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { useState } from "react";


export function MainForm() {

    const [taskName,setTaskName] = useState('');

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) { 
        console.log(taskName);
        event.preventDefault();
        
    }

    return (

        <form onSubmit={handleCreateNewTask} className='form' action=''>
            <div className='formRow'>
                <DefaultInput 
                  labelText='task'
                  id='meuInput'
                  type='text'
                  placeholder='Digite algo'
                  value={taskName} // 
                  onChange={e=>setTaskName(e.target.value)}//input controlado cada letra digitada é salva em tempo real
                />
            </div>
            <div className='formRow'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>

        </form>
    )
}


