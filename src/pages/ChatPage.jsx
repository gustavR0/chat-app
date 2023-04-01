import { Messages } from '../components/Messages'
import { InboxPeople } from '../components/InboxPeople'
import { ChatSelect } from '../components/ChatSelect'

export const ChatPages = () => {
  return (
    <div className='messaging'>
      <div className='inbox_msg'>
        <InboxPeople />
        {(true)
          ? (<Messages />)
          : (<ChatSelect />)}
      </div>
    </div>
  )
}
