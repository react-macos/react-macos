import { Outlet } from 'umi'
import StatusBar from './widgets/StatusBar'
import styles from './index.less'

export default function DesktopLayout() {
  return (
    <div className={styles.desktopWrapper}>
      <StatusBar />
      <Outlet />
    </div>
  )
}
