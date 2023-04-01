import React from 'react'
import { SendMessages } from './SendMessages'
import { IncomingMessage } from './IncomingMessage'
import { OutGoingMessage } from './OutGoingMessage'

export const Messages = () => {
  return (
    <div className='mesgs'>
      <div className='msg_history'>
        <IncomingMessage />
        <OutGoingMessage />
      </div>
      <SendMessages />
    </div>
  )
}
