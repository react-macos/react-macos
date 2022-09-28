import React from 'react'
import styles from './Dock.less'
import clsx from 'clsx'
import type { MacDockItem, MacDockProps } from '../../interface/dockInterface'

const Dock: React.FC<MacDockProps> = (props) => {
  const {
    className,
    style,
    placement = 'bottom',
    size = 'default',
    items,
    renderItem: customRenderItem,
    onClick,
  } = props

  const [currentIndex, setCurrentIndex] = React.useState<number>()

  // dock中没一个app大小样式
  const sizeStyle: React.CSSProperties =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
        }
      : {}

  /**
   * 处理鼠标进入事件
   * @param index
   */
  const handleMouseEnter = (index: number): void => {
    setCurrentIndex(index)
  }

  /**
   * 处理鼠标离开事件
   * @returns
   */
  const handleMouseLeave = (): void => {
    setCurrentIndex(undefined)
  }

  /**
   * 渲染每一项 dock的每一个app
   * @param item
   * @param index
   * @returns
   */
  const renderItem = (item: MacDockItem, index: number): React.ReactNode => {
    const liClassName: string = clsx(
      styles['mac-dock-item'],
      { [styles['mac-dock-item-small']]: size === 'small' },
      currentIndex !== undefined
        ? {
            [styles['mac-dock-item-prev-second']]: currentIndex - 2 === index,
            [styles['mac-dock-item-prev']]: currentIndex - 1 === index,
            [styles['mac-dock-item-current']]: currentIndex === index,
            [styles['mac-dock-item-next']]: currentIndex + 1 === index,
            [styles['mac-dock-item-next-second']]: currentIndex + 2 === index,
          }
        : null
    )
    const contentNode: React.ReactNode = <img src={item.icon} />

    return (
      <li
        className={liClassName}
        style={sizeStyle}
        key={index}
        title={item.label}
        onMouseEnter={() => handleMouseEnter(index)}
        onClick={() => onClick?.(item)}
      >
        {customRenderItem?.(item, contentNode) || contentNode}
      </li>
    )
  }

  /**
   * 渲染所有项 app的集合
   * @param items
   * @returns
   */
  const renderItems = (items: MacDockItem[]): React.ReactNode => {
    return items.map((item, index) => {
      return renderItem(item, index)
    })
  }

  /**
   * 渲染程序坞
   * @returns
   */
  const renderDock = (): React.ReactNode => {
    if (!Array.isArray(items)) {
      return
    }
    return (
      <ul className={styles['mac-dock']} onMouseLeave={handleMouseLeave}>
        {renderItems(items)}
      </ul>
    )
  }

  return (
    <>
      <div
        className={clsx(
          styles['mac-dock-container'],
          styles[`mac-dock-placement-${placement}`],
          className
        )}
        style={style}
      >
        {renderDock()}
      </div>
      <div className={styles.icpLink}>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          京 ICP 备 2022024018号
        </a>
      </div>
    </>
  )
}

export default Dock
