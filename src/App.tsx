import { Home } from './pages/Home';
import { TaskProvider } from './contexts/TaskContext/TaskProvider';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}
