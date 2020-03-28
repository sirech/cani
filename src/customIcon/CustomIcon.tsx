import React from 'react'
import { Icon } from '@material-ui/core'

import styles from './styles.module.css'

interface Props {
  source: string
}

const CustomIcon = ({ source }: Props) => (
  <Icon className={styles.icon}>
    <img alt={source} src={source} />
  </Icon>
)

export default CustomIcon
