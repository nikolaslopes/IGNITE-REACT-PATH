import { Button } from '../Button'
import { IHeader } from './types'

import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header({ onOpenNewTransactionModal }: IHeader) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <Button onClick={onOpenNewTransactionModal}>Nova transção</Button>
      </Content>
    </Container>
  )
}
