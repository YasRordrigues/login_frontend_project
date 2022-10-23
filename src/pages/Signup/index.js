import React, { useState } from 'react'
import Input from '../../components/Input'
import * as C from "./styles"
import{ Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Button from '../../components/Button'
import Images from '../../components/Image/Index'


const Signup = () => {
  const {signup} = useAuth();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSignup = () =>{
    if(!user | !senha | !senhaConf){
        setError('Preencha todos os campos.')
        return;
    } else if(senha !== senhaConf) {
      setError('As senhas não são iguais.')
      return
    }

    const res = signup(user, senha);

    if(res){
      setError(res);
      return;
    }
    
    alert("Usuário foi cadastrado com sucesso!")
    navigate('/');

  }


  return (
    <C.Container>
      <Images />
      <C.Label>PORTAS DO 2º ANDAR DO BLOCO DE PESQUISA E LAPISCO</C.Label>
      <C.Content>
        <Input
              type= 'user'
              placeholder= 'Digite seu  Usuário'
              value={user}
              onChange = {(e)=> [setUser(e.target.value), setError('')]}
              />
       <Input
            type= 'password'
            placeholder= 'Digite sua Senha'
            value={senha}
            onChange = {(e)=> [setSenha(e.target.value), setError('')]}
            />
       <Input
            type= 'password'
            placeholder= 'Confirme sua Senha'
            value={senhaConf}
            onChange = {(e)=> [setSenhaConf(e.target.value), setError('')]}
            />
      <C.LabelError>{error}</C.LabelError>
      <Button Text = "Cadastrar" onClick={handleSignup}/>
      <C.LabelSignin>
        Já tem uma conta?
        <C.Strong>
          <Link to= '/'>&nbsp;Entre</Link>
        </C.Strong>
      </C.LabelSignin>
      </C.Content>
    </C.Container>
  )
}

export default Signup;