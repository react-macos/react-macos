import React from 'react'
import apple from '@/assets/svgs/apple.svg'
import ThemeToggle from '@/components/ThemeToggle'
import styles from './StatusBar.less'

const StatusBar: React.FC = () => {
  return (
    <div className={styles.statusBarWrapper}>
      <div className={styles.statusLeft}>
        <div className={styles.statusItem}>
          <img src={apple} alt="apple-logo" />
        </div>
      </div>
      <div className={styles.statusRight}>
        <ThemeToggle className={styles.themeToggle} />
        <div className={styles.statusItem}>9月28日 周三 18:53</div>
      </div>
    </div>
  )
}

export default StatusBar
