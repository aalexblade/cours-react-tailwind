import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('should render the main application', () => {
    render(<App />)
           const element = screen.getByRole('main') || screen.getByText(/./)
    expect(element).toBeDefined()
  })
})