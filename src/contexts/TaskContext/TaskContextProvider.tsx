import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}:TaskContextProviderProps) {

    const [state,setState] = useState(initialTaskState);
    useEffect(() => { 
        console.log(state)
    },[state]) // monitorando o state com o hook use Effect() quando for inicializada a tarefa

    return (
        <TaskContext.Provider value={{state,setState}}>
            {children}
        </TaskContext.Provider>
    )
}