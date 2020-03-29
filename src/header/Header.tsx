import React from 'react'

import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  const history = useHistory()
  return (
    <header>
      <Typography
        className={styles.headline}
        onClick={() => history.push('/')}
        variant="h2"
        align="center"
      >
        Can I ... ?
      </Typography>
    </header>
  )
}

export default Header
