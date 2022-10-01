type Placement = 'top' | 'bottom' | 'left' | 'right'

type RenderItem = (
  item: MacDockItem,
  originNode: React.ReactNode
) => React.ReactNode

export interface MacDockItem {
  id: string
  label: string | undefined
  icon: string
  desktop: boolean
  show?: boolean
  whdth?: number
  height?: number
  minWhidth?: number
  minHeight?: number
  element?: JSX.Element
  link?: string
}

export interface MacDockProps {
  className?: string
  style?: React.CSSProperties
  placement?: Placement
  size?: 'default' | 'small' | number
  items?: MacDockItem[]
  renderItem?: RenderItem
  onClick?: (item: MacDockItem) => void
}
