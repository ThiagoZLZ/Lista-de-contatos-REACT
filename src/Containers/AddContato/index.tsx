import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const AddContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, telefone, email, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <S.Container>
      <form onSubmit={cadastrarContato}>
        <S.Nome
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
        />
        <S.Telefone
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
        />
        <S.Email
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Email"
        />
        <S.Botao type="submit">Adicionar</S.Botao>
      </form>
    </S.Container>
  )
}

export default AddContato
