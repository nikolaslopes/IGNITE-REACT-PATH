import { fireEvent, render, screen } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/react'

import { SubscribeButton } from '.'

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    },
    signIn: jest.fn(),
  }
})

describe('SignInButton component', () => {
  it('renders correctly when user is NOT authenticated', () => {
    render(<SubscribeButton />)

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when NOT authenticated', () => {
    const signInMocked = jest.mocked(signIn)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })
})
