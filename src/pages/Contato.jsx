import React, { useEffect, useState } from 'react'

export default function Contato() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <div className={`contato-page ${loaded ? 'loaded' : ''}`}>
      <div className="form-container">
        <h2 className="text-center fw-bold mb-4">Fale comigo</h2>

        <form action="https://formspree.io/f/xpwdgrne" method="POST">
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" name="nome" placeholder="Insira o seu nome" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="seu@email.com" required />
          </div>

          <div className="mb-3">
            <label htmlFor="assunto" className="form-label">Assunto</label>
            <input type="text" className="form-control" id="assunto" name="assunto" placeholder="" required />
          </div>

          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea className="form-control" id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem..." required></textarea>
          </div>

          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <button type="submit" className="btn btn-custom btn-contato">
              <i className="bi bi-send"></i> Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
