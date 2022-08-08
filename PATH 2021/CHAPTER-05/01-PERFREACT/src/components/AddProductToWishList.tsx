import { IAddProductToWishList } from '../Interfaces/global'
import styles from '../styles/Home.module.css'

export function AddProductToWishList({
  dispatchOnAddToWishList: onAddToWishList,
  onRequestClose,
}: IAddProductToWishList) {
  return (
    <span>
      Would like add in favorites?
      <button
        type="button"
        className={`${styles.btn} ${styles['btn-space']}`}
        onClick={onAddToWishList}
      >
        Yes
      </button>
      <button
        type="button"
        className={`${styles.btn} ${styles['btn-space']}`}
        onClick={onRequestClose}
      >
        No
      </button>
    </span>
  )
}
