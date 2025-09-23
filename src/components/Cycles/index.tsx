import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getCycleType } from '../../utils/getCycleType';
import { getNextCycle } from '../../utils/getNextCycle';
import styles from './styles.module.css';
export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  const descriptionTextMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${descriptionTextMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${descriptionTextMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
