import React from 'react'
import { List, ListItem, Paper, Box, Fade } from '@material-ui/core'

import { History } from 'history'
import { useHistory } from 'react-router-dom'

const questions = [
  'walk my pangolin',
  'acquire toilet paper',
  ' go to the bar',
  'come from the bar',
]

const answerQuestion = (history: History) => history.push('/answer')

export default () => {
  const history = useHistory()
  return (
    <Box m={12}>
      <Fade in={true}>
        <Paper>
          <List>
            {questions.map((q) => (
              <ListItem button key={q} onClick={() => answerQuestion(history)}>
                {q}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Fade>
    </Box>
  )
}
