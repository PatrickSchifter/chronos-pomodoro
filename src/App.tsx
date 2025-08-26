import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContext } from './contexts/TaskContext';

import './styles/theme.css';
import './styles/global.css';

const initialState: TaskStateModel = {
  tasks: [],
  secondasRemaining: 0,
  activeTask: null,
  formattedSecondsRemaining: '00:01',
  config: {
    longBreakTime: 15,
    shortBreakTime: 5,
    workTime: 25,
  },
  currentCycle: 0,
};

export function App() {
  const [state, setState] = useState<TaskStateModel>(initialState);
  return (
    <TaskContext.Provider value={state}>
      <Home />
    </TaskContext.Provider>
  );
}
