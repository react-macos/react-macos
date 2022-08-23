import { Outlet } from 'umi'
import StatusBar from './widgets/StatusBar'
import Dock from './widgets/Dock'
import styles from './index.less'

export default function DesktopLayout() {
  return (
    <div className={styles.desktopWrapper}>
      <StatusBar />
      <Outlet />
      <Dock />
    </div>
  )
}
