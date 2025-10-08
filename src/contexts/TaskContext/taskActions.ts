// useReducer -< hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tpo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado
// a-67 <- type+reducer criando actions bem tipadas e escaláveis

import type { TaskModel } from "../../models/TaskModel";

//Tipamos como enum os type de nossas actions
export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
}

// Action com payload criada e com opção de usar ou START_TASK ou INTERRUPT_TASK
export type TaskActionsWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

// Action SEM payload criada RESET_STATE apenas
export type TaskActionsWithoutPayload =
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };

// TaskActionMdel poderá usar as duas Actions que criamos , quando acionada
export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
