import { render, screen } from '@testing-library/react'
import { Home } from './Home'

describe('Home', () => {
  it('renders text', () => {
    render(<Home />)
    const textElement = screen.getByText(/Roll until/i)
    expect(textElement).toBeInTheDocument()
  })
})
