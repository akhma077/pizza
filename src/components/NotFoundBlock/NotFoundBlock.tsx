import styles from './notFoundBlock.module.scss';

export function NotFoundBlock() {
  return (
    <div>
      <h1 className={styles.root}>
        <span>🙁</span>
        <br />
        Ничего не найдено...
      </h1>
    </div>
  );
}
