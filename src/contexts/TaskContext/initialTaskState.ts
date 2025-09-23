import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  activeTask: null,
  formattedSecondsRemaining: '00:00',
  config: {
    longBreakTime: 15,
    shortBreakTime: 5,
    workTime: 25,
  },
  currentCycle: 0,
};
