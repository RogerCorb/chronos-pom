import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);
    if (countDownSeconds <= 0) {
      console.log("worker COMPLETED ");
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("worker terminado ");
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]); // monitorando o state com o hook use Effect() quando for inicializada a tarefa

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
