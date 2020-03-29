import React from 'react'

import { Button, Fade, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import WithDelay from 'withDelay'

import footer from './Footer.module.css'

const Answer = () => {
  const history = useHistory()

  return (
    <>
      <Fade timeout={1000} in={true}>
        <section>
          <Typography variant="h2" className="center" align="center">
            No
          </Typography>
        </section>
      </Fade>
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
