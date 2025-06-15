import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Logo />
    </div>
  );
}
