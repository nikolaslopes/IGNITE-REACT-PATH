import { useEffect } from 'react'
import { useAuthContext } from '../context/useAuthContext'
import { Api } from '../services/Api'
import { setupAPIClient } from '../services/setupAPIClient'

import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  const { user } = useAuthContext()

  useEffect(() => {
    Api.get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1>Hi, {user?.email}!</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const ApiClient = setupAPIClient(context)
  const response = await ApiClient.get('/me')

  console.log('res', response)

  return {
    props: {},
  }
})
