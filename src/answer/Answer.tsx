import React from 'react'

import { Button, Typography, CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useTimeout } from 'react-use'

import footer from './Footer.module.css'
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

const Answer = () => {
  const history = useHistory()

  return (
    <>
      <section>
        <Typography variant="h2" className="center" align="center">
          No
        </Typography>
      </section>
      <footer className={footer.footer}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/')}
        >
          Try your luck again
        </Button>
      </footer>
    </>
  )
}

export default () => <WithDelay render={() => <Answer />} />
