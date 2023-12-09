'use client'
import { IOperator } from '@/models'
import {
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
  PropsWithChildren,
  useState,
} from 'react'

interface IActive {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  operatore: IOperator
  setOperator: Dispatch<SetStateAction<IOperator>>
}

const initialValues: IActive = {
  isActive: false,
  setIsActive: () => undefined,
  operatore: { id: 0, title: '', image: '' },
  setOperator: () => undefined,
}
export const ActiveContext = createContext(initialValues)

export const ActiveContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [isActive, setIsActive] = useState(false)
  const [operatore, setOperator] = useState<IOperator>({
    id: 0,
    title: '',
    image: '',
  })
  const visibleValues = {
    isActive,
    setIsActive,
    operatore,
    setOperator,
  }

  return (
    <ActiveContext.Provider value={visibleValues}>
      {children}
    </ActiveContext.Provider>
  )
}

export const useActiveContext = () => useContext(ActiveContext)
