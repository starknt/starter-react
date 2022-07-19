import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { App } from '../src/App'

test('App Component', () => {
    render(<App />)

    expect(screen.getByText(/Hello World!!/i)).toBeDefined()
})
