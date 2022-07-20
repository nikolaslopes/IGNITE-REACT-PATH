import { useEffect } from 'react'
import { useAuthContext } from '../context/useAuthContext'
import { Api } from '../services/Api'
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
      <h1>Olá, {user?.email}!</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const res = await Api.get('/me')

  console.log(res.data)

  return {
    props: {},
  }
})
