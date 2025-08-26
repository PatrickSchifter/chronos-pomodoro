import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondasRemaining: 0,
  activeTask: null,
  formattedSecondsRemaining: '00:00',
  config: {
    longBreakTime: 15,
    shortBreakTime: 5,
    workTime: 25,
  },
  currentCycle: 0,
};

export const TaskContext = createContext(initialState);
