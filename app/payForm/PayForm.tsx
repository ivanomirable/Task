'use client'
import { useActiveContext } from '@/app/context'
import { IOperator } from '@/models'
import { useToggle } from '../hooks/Toggle'
import {
  Container,
  ContainerActive,
  ModalContent,
  Div,
  Input,
  InputSucess,
  Button,
  Form,
  Description,
  DescriptionSucces,
  Succes,
  Img,
} from './styles'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'

export const PayForm = () => {
  const { setIsActive, operatore, isActive } = useActiveContext()
  const [succesTransaction, setSuccesTransaction] = useState(false)
  const [phone, setPhone] = useState('')
  const [disabled, setDisabled] = useState(Boolean)
  const [amount, setAmount] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    setDisabled(false)
    setResponse('')
  }, [isActive, amount, phone])

  function Timer() {
    setIsActive(false)
  }
  // Эмуляция успешного и неуспешного ответа при нажатии на кнопку
  const handleMockButtonClick = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )
      const responseCode = Math.random() < 0.5 ? 200 : 400
      if (Array.isArray(data) && data.length > 0 && responseCode) {
        if (responseCode == 200) {
          setTimeout(() => {
            setDisabled(true)
            setResponse('Оплата прошла успешно!')
            setTimeout(Timer, 2000)
          }, 1000)
        } else {
          setResponse('Что-то пошло не так')
        }
      }
    } catch (error) {
      console.log('Ошибка при выполнении запроса:', error)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '')
    const formattedPhone = formatPhone(input)
    setPhone(formattedPhone)
  }
  // маска номера телефона
  const formatPhone = (phone: string) => {
    if (phone.length < 4) {
      return phone
    } else if (phone.length < 7) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3)}`
    } else if (phone.length < 10) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
    } else {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(
        6,
        8,
      )}-${phone.slice(8, 10)}`
    }
  }

  const validatePhone = () => {
    return /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value

    // Оставляем только цифры
    const filteredInput = input.replace(/[^0-9]/g, '')

    // Устанавливаем максимальную сумму 1000 рублей
    if (Number(filteredInput) > 1000) {
      setAmount('1000')
    } else {
      setAmount(filteredInput)
    }
  }
  const sumValidate = () => {
    return /^.{1,1000}$/.test(amount)
  }
  function Validate() {
    setSuccesTransaction(validatePhone() && sumValidate())
    handleMockButtonClick()
  }
  const test = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Div>
      {isActive ? (
        <ContainerActive onClick={() => setIsActive(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Img src={operatore.image} />
            <div>{operatore.title}</div>
            <Form onSubmit={test}>
              {validatePhone() ? (
                <>
                  <InputSucess
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  <DescriptionSucces>Номер телефона валидный</DescriptionSucces>
                </>
              ) : (
                <div>
                  <>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    <Description>Введите свой номер телефона</Description>
                  </>
                </div>
              )}
              {sumValidate() ? (
                <>
                  <InputSucess
                    type="tel"
                    value={amount}
                    onChange={handleInputChange}
                  />
                  <DescriptionSucces>Cумма валидна</DescriptionSucces>
                </>
              ) : (
                <div>
                  <>
                    <Input
                      type="tel"
                      value={amount}
                      onChange={handleInputChange}
                    />
                    <Description>Введите сумму от 1 до 1000 руб.</Description>
                  </>
                </div>
              )}
              <>
                {validatePhone() && sumValidate() ? (
                  <Button onClick={() => Validate()} disabled={disabled}>
                    Оплатить
                  </Button>
                ) : (
                  <Button disabled={true}>Оплатить</Button>
                )}
              </>
              {succesTransaction && validatePhone() && sumValidate() && (
                <Succes>{response}</Succes>
              )}
            </Form>
          </ModalContent>
        </ContainerActive>
      ) : (
        <Container>
          <ModalContent onClick={(e) => e.stopPropagation()}></ModalContent>
        </Container>
      )}
    </Div>
  )
}
