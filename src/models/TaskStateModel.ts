export type TaskStateModel = {
  tasks: [];
  secondasRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
