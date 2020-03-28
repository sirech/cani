import React from 'react'

import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import footer from './Footer.module.css'

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

export default Answer
