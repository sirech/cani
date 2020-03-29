import React from 'react'

import { Button, Fade, Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'

import WithDelay from 'withDelay'

import footer from './Footer.module.css'

const showAnswer = (answer: string | undefined) => {
  return answer ? answer : 'No'
}

const Answer = () => {
  const history = useHistory()
  const {
    state: { answer },
  } = useLocation()

  return (
    <>
      <Fade timeout={1000} in={true}>
        <section>
          <Typography variant="h2" className="center" align="center">
            {showAnswer(answer)}
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
