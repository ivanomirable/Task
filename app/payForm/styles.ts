import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: 0.5s;
`
export const ContainerActive = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: 0.5s;
`

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
  background-color: white;
`
export const Div = styled.div`
  height: 100%;
  width: 100%;
`
export const Input = styled.input`
  margin-top: 15px;
  display: block;
  width: 90%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: ${props=>props.color};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`


export const Button = styled.button`
font-family:cursive;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: all ease 0.3s;
  cursos: pointer;
  margin-top: 20px;
  &:hover {
    background: black;
    color: white;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Description = styled.p`
font-family:cursive;
color:${props=>props.color};
  font-size: 10px;
  margin-top: 2px;
`

export const Succes = styled.div`
  margin-top: 6px;
  font-size: 10px;
  color: black;
  transition: all 5s ease;
  text-align: center;
`
export const Img = styled.img`
  height: 30px;
  width: 30px;
`