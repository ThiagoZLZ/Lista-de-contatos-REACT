import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 80px;
  text-align: center;
`

export const Nome = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  resize: none;
  border: none;
  background-color: transparent;
  text-align: center;
`
export const Telefone = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  resize: none;
  border: none;
  background-color: transparent;
  text-align: center;
`
export const Email = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  resize: none;
  border: none;
  background-color: transparent;
  text-align: center;
`

export const BarraAcoes = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 10px;
`
export const Container = styled.div`
  display: flex
  justify-content: center;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  margin-left: 10px;
  border-radius: 20%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
