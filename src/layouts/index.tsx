import React from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import DesktopLayout from './DesktopLayout'

const RootWrapper: React.FC = () => {
  const darkMode = useDarkMode(false)

  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        txt: 'black',
      },
    },
  })

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        txt: 'white',
      },
    },
  })

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <DesktopLayout />
    </NextUIProvider>
  )
}

export default RootWrapper
