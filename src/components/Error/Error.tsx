import styles from './error.module.scss';

export function Error() {
  return (
    <div className={styles.content}>
      <div className={styles.content__error_block}>
        <h2>Произошла ошибка...😕</h2>
        <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже</p>
      </div>
    </div>
  );
}
