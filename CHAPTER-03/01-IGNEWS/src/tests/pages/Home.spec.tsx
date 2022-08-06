import { render, screen } from '@testing-library/react'
import Home from '../../pages'

jest.mock('next/router')
jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    },
  }
})

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{ amount: 'R$00' }} />)

    expect(screen.getByText('for R$00 month')).toBeInTheDocument()
  })
})
