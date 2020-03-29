import React from 'react'

import { Typography, Divider } from '@material-ui/core'
import Header from 'header'

const About = () => (
  <>
    <Header />
    <Typography variant="body1" className="center" align="center">
      This site provides a way of checking if any particular activity is allowed
      or not. Powerful machine learning algorithms are used, with the results
      being written to a blockchain.
    </Typography>
  </>
)

export default About
