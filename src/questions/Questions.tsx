import React from 'react'
import { List, ListItem, Paper, Box, Fade } from '@material-ui/core'

import { History } from 'history'
import { useHistory } from 'react-router-dom'

import CustomIcon from '../customIcon'

const questions = [
  ['walk my pangolin', 'pangolin.svg'],
  ['acquire toilet paper', 'toilet-paper.png'],
  [' go to the bar'],
  ['come from the bar'],
]

const answerQuestion = (history: History) => history.push('/answer')

export default () => {
  const history = useHistory()
  return (
    <Box m={12}>
      <Fade in={true}>
        <Paper>
          <List>
            {questions.map(([q, image]) => (
              <ListItem button key={q} onClick={() => answerQuestion(history)}>
                {image && <CustomIcon source={image} />}
                <span>{q}</span>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Fade>
    </Box>
  )
}
