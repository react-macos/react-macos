import { Outlet } from 'umi'
import StatusBar from './widgets/StatusBar'
import Dock from './widgets/Dock'
import styles from './index.less'
import type { MacDockItem } from '../interface/dockInterface'

export default function DesktopLayout() {
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

  return (
    <div className={styles.desktopWrapper}>
      <StatusBar />
      <Outlet />
      <Dock items={dockList} />
    </div>
  )
}
