import React, { useState, useEffect } from 'react'
import { Button, Table, Card, Input, useInput } from '@nextui-org/react'

const HomePage: React.FC = () => {
  interface item {
    id: number
    nickName: string
    content: string
  }
  const [messageList, setMessageList] = useState<Array<item>>([])

  const getMessage = () => {
    fetch('/api/getMessage')
      .then((res) => res.json())
      .then((res) => {
        setMessageList(res.data)
      })
  }
  useEffect(() => {
    getMessage()
  }, [])
  const columns = [
    {
      key: 'id',
      label: '序号',
    },
    {
      key: 'nickName',
      label: '昵称',
    },
    {
      key: 'content',
      label: '留言',
    },
  ]
  const { value: nickName, bindings: nickNameBin } = useInput('')
  const { value: content, bindings: contentBin } = useInput('')
  const addMessage = () => {
    fetch(`/api/addMessage?nickName=${nickName}&content=${content}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          getMessage()
        }
      })
  }
  return (
    <div>
      <Card css={{ mw: '1000px' }}>
        <Card.Body>
          <Input
            {...nickNameBin}
            clearable
            color="warning"
            initialValue=""
            placeholder="输入你的昵称"
            width="250px"
            aria-label="nickName"
          />
          <Input
            {...contentBin}
            clearable
            color="warning"
            initialValue=""
            placeholder="输入你的留言"
            width="250px"
            aria-label="content"
          />
          <Button
            css={{ color: '$txt', width: '250px' }}
            onClick={() => {
              addMessage()
            }}
          >
            Click me
          </Button>
        </Card.Body>
      </Card>
      <Card css={{ mw: '1000px' }}>
        <Card.Body>
          <Table
            aria-label="Example table with dynamic content"
            css={{
              height: 'auto',
              Width: '50%',
            }}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.key}>{column.label}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={messageList}>
              {(item) => (
                <Table.Row key={item.id}>
                  {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage
