import React from 'react'
import bgImgLight from '@/assets/bg/monterey_abstract_light.jpg'
import styles from './Login.less'
import { LoginActions } from '@/interface/loginInterface'
import { User, Text, Input, Link, useInput } from '@nextui-org/react'

const Login: React.FC<LoginActions> = (props) => {
  const { setLogin } = props
  const hLogin = () => {
    setLogin(false)
  }

  const { value: password, bindings } = useInput('')
  React.useMemo(() => {
    console.log(password)
  }, [password])

  return (
    <div
      className={styles.loginWrapper}
      style={{
        backgroundImage: `url('${bgImgLight}')`,
      }}
    >
      <div className={styles.user}>
        <User
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          name=""
          size="xl"
        />
        <Text
          h1
          size={24}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight="bold"
        >
          MacOS in the Web
        </Text>
        <Input
          {...bindings}
          clearable
          color="warning"
          initialValue="123"
          type="password"
          placeholder="Enter your password"
          width="250px"
          aria-label="password"
        />
        <Link
          block
          color="primary"
          onClick={() => {
            hLogin()
          }}
          className={styles.enterLink}
        >
          Click to enter
        </Link>
      </div>
      <div className={styles.icpLink}>
        <Link
          color="secondary"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer"
        >
          京 ICP 备 2022024018号
        </Link>
      </div>
    </div>
  )
}

export default Login
