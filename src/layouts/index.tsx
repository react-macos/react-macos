import React from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import DesktopLayout from './desktop/DesktopLayout'
import Login from './login/Login'

const RootWrapper: React.FC = () => {
  const [login, setLogin] = React.useState<boolean>(true)
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
      {login ? <Login setLogin={setLogin} /> : <DesktopLayout />}
    </NextUIProvider>
  )
}

export default RootWrapper
