import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Paragrafo
        <button>
          <TimerIcon />
          Timer
        </button>
      </Heading>
      <h1>This is APP.tsx</h1>
    </>
  );
}
