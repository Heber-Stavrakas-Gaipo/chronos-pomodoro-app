import styles from './Content.module.css';

type ContentProps = {
  children: React.ReactNode;
};

export function Content(props: ContentProps) {
  const { children } = props;
  return <div className={styles.content}>{children}</div>;
}
