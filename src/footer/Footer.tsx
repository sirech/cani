import React from 'react'
import { Link, Box } from '@material-ui/core'

const Footer = () => (
  <Box component="footer" display="flex" justifyContent="center" mb={2}>
    <span>
      Favicon courtesy of{' '}
      <Link
        href="https://www.flaticon.com/authors/freepik"
        title="Freepik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Freepik
      </Link>{' '}
      from{' '}
      <Link
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.flaticon.com
      </Link>
    </span>
  </Box>
)

export default Footer
