'use client'

import { useActiveContext } from '@/app/context'
import { IOperator } from '@/models'
import { useToggle } from '../hooks/Toggle'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Title, Button, Img } from './styles'
interface OperatorProps {
  operator: IOperator
}

export const Operator = ({ operator }: OperatorProps) => {
  const { open, isVisible } = useToggle()

  const { setOperator, setIsActive } = useActiveContext()
  function addInContext() {
    setOperator(operator)
    open()
    setIsActive(isVisible)
  }
  return (
    <div>
      <Container>
        <Img src={operator.image} className="w-1/6" alt="" />
        <Title>{operator.title}</Title>
        <Button onClick={addInContext}>
          <Title>Оплатить</Title>
        </Button>
      </Container>
    </div>
  )
}
