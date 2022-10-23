import React from 'react'
import { useNavigate  } from 'react-router-dom';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles"
import Swal from 'sweetalert2';
import Images from '../../components/Image/Index'

const Home  = () => {

  const navigate = useNavigate();
  const {signout} = useAuth();
  const openPort=()=>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Porta Aberta',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <C.Container>
      <Images />
      <C.Title>PORTAS DO 2ª ANDAR DO BLOCO DE PESQUISA E LAPISCO</C.Title>
      <Button Text='Porta do 2° andar - Bloco de Pesquisa'
      onClick={() => [openPort()]}>
      Porta do 2° andar - Bloco de Pesquisa
      </Button>
      <Button Text='Porta do LAPISCO'
      onClick={() => [openPort()]}>
      Porta do LAPISCO
      </Button>
      <Button Text='Sair' onClick={() => [signout(), navigate('/')]}>
        Sair
      </Button>
    </C.Container>
  )
}

export default Home