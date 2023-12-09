import styled from "styled-components"


export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  width: 90%;
  flex-direction: column;
  min-height: 150px;

  background: white;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 3px;
  border: 2px solid black;

  @media (max-width: 440px) {
    height: 100;
    width: 70%;
  }
`
export const Title = styled.p`
  font-size: 15px;
  @media (max-width: 550px) {
    font-size: 10px;
    text-align: center;
  }
  @media (max-width: 440px) {
    font-size: 8px;
    text-align: center;
  }
`
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  display: inline-block;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: all ease 0.3s;
  margin-top: 10px;
  &:hover {
    background: black;
    color: white;
  }
`
export const Img = styled.img`
  @media (max-width: 440px) {
    height: 50px;
    width: 50px;
  }
`