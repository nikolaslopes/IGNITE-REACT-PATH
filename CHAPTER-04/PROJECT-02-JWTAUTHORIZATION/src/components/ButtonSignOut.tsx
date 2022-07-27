import { useAuthContext } from '../context/useAuthContext'
import styles from '../styles/Home.module.css'

export function ButtonSignOut() {
  const { signOut } = useAuthContext()

  return (
    <button className={styles.btn} onClick={signOut}>
      SignOut
    </button>
  )
}
