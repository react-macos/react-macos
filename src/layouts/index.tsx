import { Outlet } from 'umi'
import StatusBar from './widgets/StatusBar'
import Dock from './widgets/Dock'
import styles from './index.less'
import { MacDockItem } from '../interface/dockInterface'

export default function DesktopLayout() {
  const dockList: MacDockItem[] = [
    {
      label: 'launchpad',
      icon: require('./images/dock-icon/launchpad.png'),
    },
    {
      label: 'bear',
      icon: require('./images/dock-icon/bear.png'),
    },
    {
      label: 'facetime',
      icon: require('./images/dock-icon/facetime.png'),
    },
    {
      label: 'github',
      icon: require('./images/dock-icon/github.png'),
    },
    {
      label: 'mail',
      icon: require('./images/dock-icon/mail.png'),
    },
    {
      label: 'safari',
      icon: require('./images/dock-icon/safari.png'),
    },
    {
      label: 'terminal',
      icon: require('./images/dock-icon/terminal.png'),
    },
    {
      label: 'vscode',
      icon: require('./images/dock-icon/vscode.png'),
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
