import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function App() {
  const [showFooter, setShowFooter] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow p-3 mb-4">
        <div className="container">
          <Link className="navbar-brand d-flex flex-column" to="/">
            <span className="h5 mb-0 fw-bold">João Vitor Benedet</span>
            <small className="text-muted" style={{ fontSize: '0.85rem' }}>Estudante de Engenharia de Software</small>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 text-center mt-3 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''}`}>Início</Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className={`nav-link ${location.pathname.startsWith('/sobre') ? 'active fw-bold' : ''}`}>Currículo</Link>
              </li>
              <li className="nav-item">
                <Link to="/projetos" className={`nav-link ${location.pathname.startsWith('/projetos') ? 'active fw-bold' : ''}`}>Projetos</Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className={`nav-link ${location.pathname.startsWith('/contato') ? 'active fw-bold' : ''}`}>Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
