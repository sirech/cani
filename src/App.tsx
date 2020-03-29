import React from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'
import { CssBaseline, Container, Box, Typography } from '@material-ui/core'

import Questions from 'questions'
import Answer from 'answer'
import About from 'about'

const EntryPoint = () => (
  <>
    <Typography variant="h2" align="center">
      Can I ... ?
    </Typography>
    <Questions />
  </>
)

const App = () => (
  <div data-testid="app">
    <CssBaseline />

    <Box mt={12}>
      <Container component="main">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/answer" component={Answer} />
          <Route path="/" component={EntryPoint} />
        </Switch>
      </Container>
    </Box>
  </div>
)

export default App
