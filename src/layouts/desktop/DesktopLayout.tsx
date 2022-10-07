import React from 'react'
import { Outlet } from 'umi'
import StatusBar from './widgets/StatusBar'
import Dock from './widgets/Dock'
import bgImgLight from '@/assets/bg/monterey_abstract_light.jpg'
import bgImgDark from '@/assets/bg/monterey_abstract_dark.jpg'
import { useTheme, globalCss } from '@nextui-org/react'
import styles from './DesktopLayout.less'
import apps from '@/config/apps.config'

const globalStyles = globalCss({
  li: { margin: 0 },
})

const DesktopLayout: React.FC = () => {
  const { isDark } = useTheme()

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
      <Dock items={apps} />
    </div>
  )
}

export default DesktopLayout
