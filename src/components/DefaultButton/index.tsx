import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}

//30.Criando um component de botao reutilizavel com opcoes
//Esse button foi criado de maneira flexivel e reaproveitavel de maneira que possa ser usado tanto no caso para inclusao
//de uma nova tarefa, quanto para iniciar ou pausar um novo ciclo. Foi utilizado a props color para definir o style do button
//e futuramente sera incluso a logica de onClick nele.
