import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies } from 'nookies'
import { destroyUserCookies, TOKEN_NAME } from '../context/utils'
import { AuthTokenError } from '../services/errors/AuthTokenError'

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context)
    const token = cookies[TOKEN_NAME]

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    try {
      return await fn(context)
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyUserCookies(context)
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }

      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }
}
