import { signOut } from '../context/AuthContext'

import styles from '../styles/Home.module.css'

export function ButtonSignOut() {
  return (
    <button className={styles.btn} onClick={() => signOut()}>
      SignOut
    </button>
  )
}
