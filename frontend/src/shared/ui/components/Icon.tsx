import { BsKanban, BsLamp, BsPlusLg } from 'react-icons/bs'
import { IoMdDocument } from 'react-icons/io'
import { FiEdit2, FiList, FiUsers, FiLogOut, FiSave } from 'react-icons/fi'
import { AiOutlineCalendar, AiOutlineMinus } from 'react-icons/ai'

const Icons = {
  'kanban': BsKanban,
  'logout': FiLogOut,
  'save': FiSave,
  'add': BsPlusLg,
  'delete': AiOutlineMinus,
  'edit': FiEdit2,
  'list': FiList,
  'doc': IoMdDocument,
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