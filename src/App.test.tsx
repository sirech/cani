import React from 'react'

import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/dom'
import { act } from '@testing-library/react'

import App from './App'
import fullRender from '@testing'

describe('App', () => {
  it('renders without crashing', async () => {
    fullRender(<App />)

    await waitFor(() => screen.getByText('Can I ... ?'))
  })

  it('can go the answer and back', async () => {
    fullRender(<App />)

    userEvent.click(screen.getByText('grill outside'))
    act(() => {
      jest.runAllTimers()
    })

    await waitFor(() => screen.getByText('No'))
    userEvent.click(screen.getByText('Try your luck again'))

    userEvent.click(screen.getByText('walk my pangolin'))
    act(() => {
      jest.runAllTimers()
    })

    await waitFor(() => screen.getByText('Fuck your pangolin'))
  })
})
