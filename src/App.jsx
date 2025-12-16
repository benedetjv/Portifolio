import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function App() {
  const [showFooter, setShowFooter] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="p-4 d-flex justify-content-between align-items-center shadow bg-white">
        <div>
          <h1 className="h5 mb-0">João Vitor Benedet</h1>
          <span className="text-muted">Estudante de Engenharia de Software</span>
        </div>
        <nav className="d-flex gap-3">
          <Link
            to="/"
            className={`text-decoration-none ${location.pathname === '/' ? 'fw-bold text-dark' : 'text-secondary'}`}
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className={`text-decoration-none ${location.pathname.startsWith('/sobre') ? 'fw-bold text-dark' : 'text-secondary'}`}
          >
            Currículo
          </Link>
          <Link
            to="/projetos"
            className={`text-decoration-none ${location.pathname.startsWith('/projetos') ? 'fw-bold text-dark' : 'text-secondary'}`}
          >
            Projetos
          </Link>
          <Link
            to="/contato"
            className={`text-decoration-none ${location.pathname.startsWith('/contato') ? 'fw-bold text-dark' : 'text-secondary'}`}
          >
            Contato
          </Link>
        </nav>
      </header>

      <main className="container my-5 flex-grow-1">
        <Outlet />
      </main>

      {isHome && (
        <>
          <div
            className="text-center footer-toggle"
            role="button"
            onClick={() => setShowFooter(v => !v)}
          >
            {showFooter ? 'Ocultar informações' : 'Ver mais informações'}
          </div>

          <footer className={`footer-full border-top ${showFooter ? 'show' : ''}`}>
            <div className="container d-flex flex-column flex-md-row justify-content-between text-center text-md-start small">
              <div>
                <strong>Telefone</strong><br />
                (48) 9 9170-1454
              </div>
              <div>
                <strong>Email</strong><br />
                joaokrtv@gmail.com
              </div>
              <div>
                <strong>Me siga</strong><br />
                <a
                  href="https://www.linkedin.com/in/benedetjoao/"
                  target="_blank"
                  className="linkedin-icon"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="text-muted mt-3 mt-md-0">
                © 2025 João Vitor Benedet
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
