import { render, screen } from '@testing-library/react'
import PostPreview from '../../pages/posts/preview/[slug]'
import { post } from '../mocks/post'

describe('Preview page', () => {
  it('renders correctly', () => {
    render(<PostPreview post={post} />)
  })
})
