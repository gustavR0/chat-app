import { dateFormat } from '../helpers/date'

export const OutGoingMessage = ({ msg }) => {
  const { mensaje, createdAt } = msg

  return (
    <div className='outgoing_msg'>
      <div className='sent_msg'>
        <p>{mensaje}</p>
        <span className='time_date'> {dateFormat(createdAt)} </span>
      </div>
    </div>
  )
}
