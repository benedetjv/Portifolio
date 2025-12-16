import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center">
      <img
        src="/img/perfil.jpeg"
        alt="Foto de perfil"
        className="home-profile"
      />

      <h2 className="fw-bold">Olá!</h2>
      <p className="lead">Eu sou o João Vitor Benedet</p>
      <p className="mb-4">
        Jornalista e estudante de Engenharia de Software, busco me desenvolver como profissional da área de tecnologia. 
        Conheça um pouco mais sobre mim:
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/sobre" className="btn btn-custom btn-curriculo">
          Currículo
        </Link>
        <Link to="/projetos" className="btn btn-custom btn-projetos">
          Projetos
        </Link>
        <Link to="/contato" className="btn btn-custom btn-contato">
          Contato
        </Link>
      </div>
    </div>
  )
}
