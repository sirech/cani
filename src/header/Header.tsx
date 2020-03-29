import React from 'react'

import { Typography, Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  const history = useHistory()
  return (
    <header>
      <Box mb={12}>
        <Typography
          className={styles.headline}
          onClick={() => history.push('/')}
          variant="h2"
          align="center"
        >
          Can I ... ?
        </Typography>
        <Typography
          className={styles.headline}
          onClick={() => history.push('/about')}
          variant="h5"
          align="center"
        >
          About
        </Typography>
      </Box>
    </header>
  )
}

export default Header
