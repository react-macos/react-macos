import React from 'react'
import { Outlet } from 'umi'
import StatusBar from './widgets/StatusBar'
import Dock from './widgets/Dock'
import type { MacDockItem } from '../interface/dockInterface'
import bgImgLight from '@/assets/bg/monterey_abstract_light.jpg'
import bgImgDark from '@/assets/bg/monterey_abstract_dark.jpg'
import { useTheme, globalCss } from '@nextui-org/react'
import styles from './DesktopLayout.less'

const globalStyles = globalCss({
  li: { margin: 0 },
})

const DesktopLayout: React.FC = () => {
  const { isDark } = useTheme()

  const dockList: MacDockItem[] = [
    {
      label: 'launchpad',
      icon: require('@/assets/app-icon/launchpad.png'),
    },
    {
      label: 'bear',
      icon: require('@/assets/app-icon/bear.png'),
    },
    {
      label: 'facetime',
      icon: require('@/assets/app-icon/facetime.png'),
    },
    {
      label: 'github',
      icon: require('@/assets/app-icon/github.png'),
    },
    {
      label: 'mail',
      icon: require('@/assets/app-icon/mail.png'),
    },
    {
      label: 'safari',
      icon: require('@/assets/app-icon/safari.png'),
    },
    {
      label: 'terminal',
      icon: require('@/assets/app-icon/terminal.png'),
    },
    {
      label: 'vscode',
      icon: require('@/assets/app-icon/vscode.png'),
    },
  ]

  globalStyles()

  return (
    <div
      className={styles.desktopWrapper}
      style={{
        backgroundImage: `url('${isDark ? bgImgDark : bgImgLight}')`,
      }}
    >
      <StatusBar />
      <Outlet />
      <Dock items={dockList} />
    </div>
  )
}

export default DesktopLayout
