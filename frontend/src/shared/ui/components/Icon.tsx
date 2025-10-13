import React from 'react'

import { BsKanban, BsKey, BsLamp, BsPlusCircle } from 'react-icons/bs'
import { IoMdDocument, IoMdMegaphone, IoMdRemove } from 'react-icons/io'
import { FiEdit2, FiUpload, FiList, FiUsers, FiLogOut } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'

const Icons = {
  'kanban': BsKanban,
  'logout': FiLogOut,
  'add': BsPlusCircle,
  'delete': IoMdRemove,
  'edit': FiEdit2,
  'upload': FiUpload,
  'list': FiList,
  'doc': IoMdDocument,
  'feedback': IoMdMegaphone,
  'calendar': AiOutlineCalendar,
  'users': FiUsers,
  'lamp': BsLamp

}

export type IconName = keyof typeof Icons

type Props = {
  icon: IconName
  size?: number
  onClick?: () => void
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: Object
  color?: string
}

export const Icon = ({ icon, size, onClick, color }: Props) => {
  const Component = Icons[icon]
  return <Component size={size} onClick={onClick} color={color} />
}