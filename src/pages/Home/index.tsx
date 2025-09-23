import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Home() {
  const { state } = useTaskContext();
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
