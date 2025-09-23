import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';
import { getNextCycle } from '../../utils/getNextCycle';
import { getCycleType } from '../../utils/getCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case 'START_TASK': {
      const nextCycle = getNextCycle(state.currentCycle);
      const nextCyckeType = getCycleType(nextCycle);
      const secondsRemaining = state.config[nextCyckeType] * 60;
      const formattedSecondsRemaining =
        formatSecondsToMinutes(secondsRemaining);

      return {
        ...state,
        activeTask: action.payload,
        currentCycle: nextCycle,
        formattedSecondsRemaining,
        secondsRemaining,
        tasks: [...state.tasks, action.payload],
      };
    }

    case 'INTERRUPT_TASK':
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };

    default:
      return state;
  }
}
