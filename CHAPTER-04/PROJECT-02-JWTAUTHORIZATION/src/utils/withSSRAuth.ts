import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies } from 'nookies'
import decode from 'jwt-decode'
import { destroyUserCookies, TOKEN_NAME } from '../context/utils'
import { AuthTokenError } from '../services/errors/AuthTokenError'
import { validateUserPermissions } from './validateUserPermissions'

type WithSSRAuthOptions = {
  permissions?: string[]
  roles?: string[]
}

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions
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

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token)

      console.log(user)
      const { permissions, roles } = options

      const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles,
      })

      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false,
          },
        }
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
