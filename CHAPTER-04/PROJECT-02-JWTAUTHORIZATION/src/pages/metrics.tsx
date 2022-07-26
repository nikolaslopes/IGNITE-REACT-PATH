import { setupAPIClient } from '../services/setupAPIClient'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Metrics() {
  return (
    <>
      <h1>This is all metrics</h1>
      <h3>and you have permission to see it</h3>
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
    permissions: ['metrics.list'],
    roles: ['administrator'],
  }
)
