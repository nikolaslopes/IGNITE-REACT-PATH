import styles from '../styles/Home.module.css'

export function AddProductToWishList() {
  return (
    <span>
      Would like add in favorites?
      <button type="button" className={`${styles.btn} ${styles['btn-space']}`}>
        Yes
      </button>
      <button type="button" className={`${styles.btn} ${styles['btn-space']}`}>
        No
      </button>
    </span>
  )
}
