import { animateScroll } from 'react-scroll'

export const scrollToBotton = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 0
    })
  }, 10)
}

export const scrollToBottonAnimated = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 250
    })
  }, 10)
}
