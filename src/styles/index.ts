import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-aling: center;
  padding: 0 200px;
  width: 27%;
  margin: 0 auto;
`

export const Lista = styled.h1`
  text-align: center;
  padding: 25px;
  font-size: 50px;
`

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  text-aling: center;
  padding: 0 200px;
  width: 27%;
  margin: 0 auto;
  background-color: red;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.8);
`

export default EstiloGlobal
