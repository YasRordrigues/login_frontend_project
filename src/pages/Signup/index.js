import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as C from "./styles"
import{ Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const Signup = () => {
  const {signup} = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSignup = () =>{
    if(!email | !senha | !senhaConf){
        setError('Preencha todos os campos.')
        return;
    } else if(senha !== senhaConf) {
      setError('As senhas não são iguais.')
      return
    }

    const res = signup(email, senha);

    if(res){
      setError(res);
      return;
    }
    
    alert("Usuário foi cadastrado com sucesso!")
    navigate('/');

  }


  return (
    <C.Container>
      <C.Label>SISTEM LOGIN</C.Label>
      <C.Content>
        <Input
              type= 'email'
              placeholder= 'Digite seu E-mail'
              value={email}
              onChange = {(e)=> [setEmail(e.target.value), setError('')]}
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
      <Button Text = "Entrar" onClick={handleSignup}/>
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