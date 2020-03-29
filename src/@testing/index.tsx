import React from 'react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

const fullRender = (children: React.ReactNode, { route = '/' } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] })
  return {
    ...render(<Router history={history}>{children}</Router>),
    history,
  }
}
export default fullRender
