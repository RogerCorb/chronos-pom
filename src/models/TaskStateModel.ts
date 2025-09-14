import type { TaskModel } from "./TaskModel"

export type TaskStateModel = { 
    tasks: TaskModel[]; // histórico, MainForm
    secondsRemaining:number; // Home,CountDown , Histórico , MainForm, Button
    formattedSecondsRemaining:string; // Título , CountDown
    activeTask: TaskModel | null; // CountDown , Hitórico, Mainform, Button
    currentCycle: number; // 1 a 8 Home
    config: { 
        workTime:number; // Mainform
        shortBreakTime:number; //Mainform
        longBreakTime:number; // Mainform
    };
};