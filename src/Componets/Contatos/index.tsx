import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  telefone: telOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [telefone, setTelefone] = useState(telOriginal)
  const [email, setEmail] = useState(emailOriginal)

  useEffect(() => {
    setNome(nomeOriginal)
    setTelefone(telOriginal)
    setEmail(emailOriginal)
  }, [nomeOriginal, telOriginal, emailOriginal])

  function cancelarEdição() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(telOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      {estaEditando ? (
        <S.Container>
          <S.BotaoSalvar
            onClick={() => {
              dispatch(
                editar({
                  nome,
                  telefone,
                  email,
                  id
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </S.BotaoSalvar>
          <S.BotaoCancelarRemover onClick={cancelarEdição}>
            Cancelar
          </S.BotaoCancelarRemover>
        </S.Container>
      ) : (
        <S.Container>
          <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
        </S.Container>
      )}
      <S.BarraAcoes />
    </S.Card>
  )
}

export default Contato
