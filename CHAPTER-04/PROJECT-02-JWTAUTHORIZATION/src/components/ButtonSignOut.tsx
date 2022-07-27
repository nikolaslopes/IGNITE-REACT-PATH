import { useAuthContext } from '../context/useAuthContext'
import { signOut } from '../context/utils'

import styles from '../styles/Home.module.css'

export function ButtonSignOut() {
  return (
    <button className={styles.btn} onClick={signOut}>
      SignOut
    </button>
  )
}
