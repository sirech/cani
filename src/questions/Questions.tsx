import React from 'react'
import { List, ListItem } from '@material-ui/core'

import { History } from 'history'
import { useHistory } from 'react-router-dom'

const questions = ['go outside', 'eat out']

const answerQuestion = (history: History) => history.push('/answer')

export default () => {
  const history = useHistory()
  return (
    <List>
      {questions.map((q) => (
        <ListItem key={q} onClick={() => answerQuestion(history)}>
          {q}
        </ListItem>
      ))}
    </List>
  )
}
