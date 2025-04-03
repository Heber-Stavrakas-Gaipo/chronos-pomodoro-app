// import styles from './styles.module.css';
type InputProps = { id: string } & React.ComponentProps<'input'>;
export function Input(props: InputProps) {
  const { type, id } = props;
  return (
    <>
      <label htmlFor={id}>Tarefa:</label>
      <input id={id} type={type} />
    </>
  );
}
