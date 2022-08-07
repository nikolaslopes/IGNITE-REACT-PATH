import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import PostPreview, { getStaticProps } from '../../pages/posts/preview/[slug]'
import { post } from '../mocks/post'
import { fakeUser } from '../mocks/user'

jest.mock('next-auth/react')
jest.mock('../../services/prismic')

describe('Post Preview page', () => {
  it('renders correctly', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    })

    render(<PostPreview post={post} />)

    expect(screen.getByText('My New Post')).toBeInTheDocument()
    expect(screen.getByText('Post excerpt')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
  })

  it('redirects user to full post when user is subscribed', async () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce(fakeUser)
  })
})
