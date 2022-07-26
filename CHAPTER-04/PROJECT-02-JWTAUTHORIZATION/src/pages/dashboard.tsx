import { useEffect } from 'react'
import { useAuthContext } from '../context/useAuthContext'
import { useCan } from '../hooks/useCan'
import { Api } from '../services/Api'
import { setupAPIClient } from '../services/setupAPIClient'

import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  const { user } = useAuthContext()

  const userIsAdmin = useCan({
    roles: ['administrator', 'editor'],
  })

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list'],
  })

  useEffect(() => {
    Api.get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1>Hi, {user?.email}!</h1>

      <br />

      {userIsAdmin && <h3>You are an admin</h3>}

      <br />

      {userCanSeeMetrics && <h3>You has permissions to see metrics</h3>}
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const ApiClient = setupAPIClient(context)
  const response = await ApiClient.get('/me')
  console.log(response.data)

  return {
    props: {},
  }
})
