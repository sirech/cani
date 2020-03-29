import React from 'react'

import { CircularProgress } from '@material-ui/core'
import { useTimeout } from 'react-use'

import container from './Container.module.css'

const WithDelay = ({ render }: { render: () => JSX.Element }) => {
  const [isReady] = useTimeout(2000)
  return (
    <>
      {isReady() ? (
        render()
      ) : (
        <div className={container.container}>
          <CircularProgress />
        </div>
      )}
    </>
  )
}

export default WithDelay
