import Router from 'next/router'
import { setupAPIClient } from '../services/setupAPIClient'
import { withSSRAuth } from '../utils/withSSRAuth'

import styles from '../styles/Home.module.css'
import { ButtonSignOut } from '../components/ButtonSignOut'

export default function Metrics() {
  return (
    <>
      <h1>This is all metrics</h1>
      <h3>and you have permission to see it</h3>

      <button className={styles.btn} onClick={() => Router.push('/dashboard')}>
        Go to Dashboard
      </button>

      <ButtonSignOut />
    </>
  )
}

export const getServerSideProps = withSSRAuth(
  async (context) => {
    const ApiClient = setupAPIClient(context)
    const response = await ApiClient.get('/me')

    return {
      props: {},
    }
  },
  {
    permissions: ['metrics.list', 'users.list'],
    roles: ['administrator', 'creator'],
  }
)
