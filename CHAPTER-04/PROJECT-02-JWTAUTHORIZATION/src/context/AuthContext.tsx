import Router from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { Api } from '../services/Api'
import {
  AuthContextData,
  IAuthProvider,
  ISignInCredentials,
  IUser,
} from './types'
import {
  REFRESH_TOKEN_NAME,
  setUserRefreshToken,
  setUserToken,
  TOKEN_NAME,
} from './utils'

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut(sendBroadcastMessage = true) {
  destroyCookie(undefined, TOKEN_NAME)
  destroyCookie(undefined, TOKEN_NAME)

  console.log('called')

  if (sendBroadcastMessage) {
    authChannel.postMessage('signOut')
  }

  Router.push('/')
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] =
    useState<Pick<IUser, 'email' | 'permissions' | 'roles'>>()

  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      console.log('message', message)
      switch (message.data) {
        case 'signOut':
          signOut(false)
          Router.push('/')
          break
        case 'signIn':
          Router.push('/dashboard')
        default:
          break
      }
    }
  }, [])

  useEffect(() => {
    const { NEXT_AUTH_BASE_TOKEN: token } = parseCookies()

    if (token) {
      Api.get<IUser>('/me')
        .then((response) => {
          const { email, permissions, roles } = response.data

          setUser({ email, permissions, roles })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  const signIn = async ({ email, password }: ISignInCredentials) => {
    try {
      const response = await Api.post<IUser>('sessions', {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setUserToken(undefined, token)
      setUserRefreshToken(undefined, refreshToken)

      setUser({
        email,
        permissions,
        roles,
      })

      Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      if (authChannel) {
        authChannel.postMessage('signIn')
      }
      Router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
