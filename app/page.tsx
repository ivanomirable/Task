'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { IOperator } from '@/models'
import styled from 'styled-components'
import { operators } from '@/data/operator'
import { Operator } from './operator/Operator'
import { useMemo, useState } from 'react'
import { PayForm } from './payForm/PayForm'
import { useActiveContext } from '@/app/context'
import { useToggle } from './hooks/Toggle'

const OperProd = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  flex-direction: row;
  justify-content: center;
  column-gap: 30px;
  row-gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 416px) {
    column-gap: 10px;
  }
  @media (max-width: 373px) {
    column-gap: 2px;
  }
`
const Container = styled.div`
  justify-content: center;
  align-items: center;
  @media (max-width: 373px) {
    margin-left: 10px;
  }
`

export default function Home() {
  return (
    <Container>
      <OperProd>
        {operators.map((operator) => (
          <Operator operator={operator} key={operator.id} />
        ))}
      </OperProd>
      <PayForm />
    </Container>
  )
}
