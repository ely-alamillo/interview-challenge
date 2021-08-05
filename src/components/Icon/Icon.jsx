import React from 'react'
import { ArrowUp, Cross, Search, ArrowDown, Delegate } from './Icons'

const supportedIcons = {
  arrowUp: <ArrowUp />,
  arrowDown: <ArrowDown />,
  cross: <Cross />,
  search: <Search />,
  delegate: <Delegate />,
}

export const Icon = ({ variant }) => {
  if (supportedIcons[variant]) {
    return supportedIcons[variant]
  }

  throw new Error(`Icon: ${variant} is not supported`)
}
