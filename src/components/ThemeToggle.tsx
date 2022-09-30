import React from 'react'
import { Switch } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import { FiSun, FiMoon } from 'react-icons/fi'
import clsx from 'clsx'

type Props = {
  className?: string
  style?: React.CSSProperties
}

const ThemeToggle: React.FC<Props> = ({ className, style = {} }) => {
  const { value, toggle } = useDarkMode(false)

  return (
    <Switch
      checked={value}
      onChange={toggle}
      size="xs"
      css={{
        '--nextui--switchColor': '#e5e5e5',
        '--nextui--switchColorShadow': '#fff',
        '--nextui--switchColorHover': '#e5e5e5',
      }}
      className={clsx(className)}
      style={{ ...style }}
      iconOn={<FiSun color="currentcolor" />}
      iconOff={<FiMoon color="currentcolor" />}
    />
  )
}

export default ThemeToggle
