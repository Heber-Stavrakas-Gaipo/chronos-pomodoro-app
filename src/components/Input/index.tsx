// import styles from './styles.module.css';
type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;
export function Input(props: InputProps) {
  const { type, id, labelText, ...rest } = props;
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...rest} />
    </>
  );
}

// No projeto Chronos, todos os inputs terão labelText, tornando a condicional desnecessária, mas será mantida para fins de consulta sobre como fazer impressão condicional ao usuário
