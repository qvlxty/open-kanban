import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/Icon'
import { themeVar } from '../theming'
import { $notifications, popNotification } from './model/private'

export const NotificationProvider = React.memo(() => {
  const notifications = useUnit($notifications)
  React.useEffect(() => {
    if (notifications.length > 0) {
      setTimeout(() => {
        popNotification()
      }, 5000)
    }
  }, [notifications])
  return (
    <Wrapper>
      {notifications.map((notification, index) => (
        <NotificationContainer key={index}>
          <NotificationWrapper>
            <Icon icon={'doc'} />
            <div>
              {notification.message}
            </div>
          </NotificationWrapper>
        </NotificationContainer>
      ))}
    </Wrapper>
  )
})

const Wrapper = styled.div`
  right: 25px;
  top: 25px;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 400px;
`

const NotificationContainer = styled.div`
  background-color: ${themeVar('secondary700')};
  color: ${themeVar('fontColor')};
  padding: 15px;
  margin:auto;
  box-shadow: 0px 12px 24px 2px #11111122;
  margin-top: 8px;
  border-radius: 8px;
 
  svg {
    margin-right: 8px;
  }
`

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: row;

  animation: fadeout 0.5s ease-out forwards;
  -webkit-animation:fadeout 0.5s;
`