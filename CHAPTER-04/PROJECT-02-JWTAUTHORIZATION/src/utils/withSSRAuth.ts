import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies } from 'nookies'
import { TOKEN_NAME } from '../context/utils'

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context)

    if (!cookies[TOKEN_NAME]) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return fn(context)
  }
}
