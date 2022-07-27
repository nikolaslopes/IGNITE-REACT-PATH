import { GetServerSidePropsContext } from 'next'
import Router from 'next/router'
import { destroyCookie, setCookie } from 'nookies'

export const TOKEN_NAME = 'NEXT_AUTH_BASE_TOKEN'
export const REFRESH_TOKEN_NAME = 'NEXT_AUTH_REFRESH_TOKEN'
let authChannel: BroadcastChannel

export const setUserToken = (
  context: GetServerSidePropsContext | undefined,
  token: string
) => {
  setCookie(context, TOKEN_NAME, token, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  })
}

export const setUserRefreshToken = (
  context: GetServerSidePropsContext | undefined,
  refreshToken: string
) => {
  setCookie(context, REFRESH_TOKEN_NAME, refreshToken, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  })
}

export const destroyUserCookies = (
  context: GetServerSidePropsContext | undefined
) => {
  destroyCookie(context, TOKEN_NAME)
  destroyCookie(context, REFRESH_TOKEN_NAME)
}

export const signOut = () => {
  destroyCookie(undefined, TOKEN_NAME)
  destroyCookie(undefined, REFRESH_TOKEN_NAME)

  authChannel.postMessage('signOut')

  Router.push('/')
}
