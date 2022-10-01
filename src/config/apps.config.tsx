import type { MacDockItem } from '@/interface/dockInterface'

const apps: MacDockItem[] = [
  {
    id: 'launchpad',
    desktop: true,
    label: 'launchpad',
    icon: require('@/assets/app-icon/launchpad.png'),
  },
  {
    id: 'bear',
    desktop: true,
    label: 'bear',
    icon: require('@/assets/app-icon/bear.png'),
  },
  {
    id: 'facetime',
    desktop: true,
    label: 'facetime',
    icon: require('@/assets/app-icon/facetime.png'),
  },
  {
    id: 'github',
    desktop: false,
    label: 'github',
    icon: require('@/assets/app-icon/github.png'),
  },
  {
    id: 'mail',
    desktop: true,
    label: 'mail',
    icon: require('@/assets/app-icon/mail.png'),
  },
  {
    id: 'safari',
    desktop: true,
    label: 'safari',
    icon: require('@/assets/app-icon/safari.png'),
  },
  {
    id: 'terminal',
    desktop: true,
    label: 'terminal',
    icon: require('@/assets/app-icon/terminal.png'),
  },
  {
    id: 'vscode',
    desktop: true,
    label: 'vscode',
    icon: require('@/assets/app-icon/vscode.png'),
  },
]

export default apps
