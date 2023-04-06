import { Messages } from '../components/Messages'
import { InboxPeople } from '../components/InboxPeople'
import { ChatSelect } from '../components/ChatSelect'
import { ChatContext } from '../context/chat/ChatContext'
import { useContext } from 'react'

export const ChatPages = () => {
  const { chatState } = useContext(ChatContext)

  return (
    <div className='messaging'>
      <div className='inbox_msg'>
        <InboxPeople />
        {chatState.chatActivo
          ? (<Messages />)
          : (<ChatSelect />)}
      </div>
    </div>
  )
}
