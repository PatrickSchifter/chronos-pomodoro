import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

export function Home() {
  const state = useContext(TaskContext);
  return (
    <MainTemplate>
      <Container>
        <CountDown
          formattedSecondsRemaining={state.formattedSecondsRemaining}
        />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
