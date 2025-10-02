import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getCycleType } from '../../utils/getCycleType';

export const Tips = () => {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyckeType = getCycleType(nextCycle);

  const tipsWhenThereIsActiveTasks = {
    workTime: <span>Focus for {state.config.workTime} minutes</span>,
    shortBreakTime: <span>Rest for {state.config.shortBreakTime} minutes</span>,
    longBreakTime: <span>Long break</span>,
  };

  const tipsWhenThereIsNoActiveTasks = {
    workTime: <span>The next cycle is {state.config.workTime} minutes</span>,
    shortBreakTime: (
      <span>The next cycle is {state.config.shortBreakTime} minutes</span>
    ),
    longBreakTime: <span>The next break will be long</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsWhenThereIsActiveTasks[state.activeTask.type]}
      {!state.activeTask && tipsWhenThereIsNoActiveTasks[nextCyckeType]}
    </>
  );
};
