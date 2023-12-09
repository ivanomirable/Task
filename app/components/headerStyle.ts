'use client'

import styled from 'styled-components'

export const AppWrappet = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  background: black;
  height: 70px;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin: 0 auto;
  transition: all ease 0.5s;
  &:hover {
    opacity: 0.6;
  }
`
export const Link = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  font`