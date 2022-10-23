import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as C from "./styles"
import{ Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Images from '../../components/Image/Index'

const Signin = () => {
    const{signin} = useAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!user | !senha ) {
          setError("Preencha todos os campos");
          return;
        }
    
        const res = signin(user, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        navigate("/home");
      };
    

  return(
    <C.Container>
        <Images />
        <C.Label>PORTAS DO 2° ANDAR DO BLOCO DE PESQUISA E LAPISCO</C.Label>
        <C.Content>
            <Input
            type= 'user'
            placeholder= 'Digite seu Usuário'
            value={user}
            onChange = {(e)=> [setUser(e.target.value), setError('')]}
            />
           <Input
            type= 'password'
            placeholder= 'Digite sua Senha'
            value={senha}
            onChange = {(e)=> [setSenha(e.target.value), setError('')]}
            />
            <C.LabelError>{error}</C.LabelError>
            <Button Text="Entrar" onClick ={handleLogin} />
            <C.LabelSignup>
                Não tem uma conta?
                <C.Strong>
                    <Link to = '/signup'>&nbsp; Registre-se</Link>
                </C.Strong>
            </C.LabelSignup>
        </C.Content>

    </C.Container>
  );
};

export default Signin;