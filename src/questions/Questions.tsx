import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Box,
  Fade,
  ListItemText,
} from '@material-ui/core'

import { History } from 'history'
import { useHistory } from 'react-router-dom'

import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import MuseumIcon from '@material-ui/icons/Museum'
import SportsHandballIcon from '@material-ui/icons/SportsHandball'

import CustomIcon from '../customIcon'

type Image = string | JSX.Element

const questions: Array<[string, Image, string?]> = [
  ['walk my pangolin', 'pangolin.svg', 'Fuck your pangolin'],
  [
    'acquire toilet paper',
    'toilet-paper.png',
    'Remember, one package per person',
  ],
  ['go to the bar', <LocalBarIcon />],
  [
    'come from the bar',
    <SportsHandballIcon />,
    'Every bar is closed, where are you even coming from?',
  ],
  ['grill outside', <OutdoorGrillIcon />],
  ['take the subway', <DirectionsSubwayIcon />],
  ['catch a plane', <AirplanemodeActiveIcon />],
  ['go to work', <BusinessCenterIcon />],
  ['go to the museum', <MuseumIcon />],
]

const answerQuestion = (history: History, answer: string | undefined) =>
  history.push('/answer', { answer: answer || '' })

const renderImage = (image: Image) => {
  if (!image) return ''

  const renderedImage =
    typeof image === 'string' ? <CustomIcon source={image} /> : image
  return <ListItemIcon>{renderedImage}</ListItemIcon>
}

export default () => {
  const history = useHistory()
  return (
    <Box mx={6} mb={12}>
      <Fade timeout={1000} in={true}>
        <Paper>
          <List>
            {questions.map(([q, image, answer]) => (
              <ListItem
                button
                key={q}
                onClick={() => answerQuestion(history, answer)}
              >
                {renderImage(image)}
                <ListItemText primary={q} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Fade>
    </Box>
  )
}
