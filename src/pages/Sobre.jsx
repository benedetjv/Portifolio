import React, { useEffect, useState } from 'react'

export default function Sobre() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <div className={`sobre-page ${loaded ? 'loaded' : ''}`}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 className="text-center fw-bold mb-4">Resumo profissional</h1>

        <h2 className="fs-5 fw-semibold mb-3">Formação Acadêmica</h2>
        <div className="mb-3">
          <p className="mb-1"><strong>FIAP</strong> — Engenharia de Software (2025–2028)</p>
          <p className="mb-0"><strong>Unisul</strong> — Jornalismo (2020–2023)</p>
        </div>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Experiência Profissional</h2>
        <ul className="mb-3">

          <li>
            <strong>
              <a href="https://www.instagram.com/teucoolusa/" target="_blank" rel="noreferrer">
                TC USA
              </a>
            </strong> — Gerente de CRM e Customer Experience. (Mai/2025 – Atual) <br />
            <small className="text-muted">Lake Park, Flórida (EUA)</small>
            <p className="mt-2">
              Liderança Estratégica na operação de Personal Shopping e Redirecionamento Internacional (EUA para o Brasil), com foco em Customer Experience, CRM e crescimento de receita.
            </p>
            <p className="mt-1">
              Responsável pela gestão completa da jornada do cliente, desde a consultoria de compra e automação de fluxos de CRM, até o acompanhamento logístico internacional e pós-venda.
            </p>
            <p className="mt-1">
              Implementação de estratégias de fidelização e comunicação consultiva, visando transformar o processo de importação em uma experiência simples e confiável, e aumentar a taxa de recompra.
            </p>
            <p className="mt-1">
              Resultado direto em crescimento de faturamento de US$15 mil para mais de US$30 mil/mês em menos de 3 meses.
            </p>
          </li>

          <li>
            <strong>
              <a href="https://palmtree48.com.br/" target="_blank" rel="noreferrer">
                Palmtree 48
              </a>
            </strong> — Redator SEO e atendimento ao cliente. (Mar/2023 – Jul/2025)
          </li>

          <li>
            <strong>
              <a href="https://sneakersul.com.br/" target="_blank" rel="noreferrer">
                Sneaker Sul
              </a>
            </strong> — Redator SEO e atendimento ao cliente. (Mar/2023 – Jul/2024)
          </li>

          <li>
            <strong>
              <a href="https://www.sulinfoco.com.br/" target="_blank" rel="noreferrer">
                Portal Sul In Foco
              </a>
            </strong> — Jornalista freelancer. (Out/2020 – Jun/2023)
          </li>

          <li>
            <strong>
              <a href="https://noticom.com.br/" target="_blank" rel="noreferrer">
                Noticom
              </a>
            </strong> — Jornalista freelancer. (Mar/2020 – Dez/2023)
          </li>

          <li>
            <strong>
              <a href="https://tubanews.com.br/" target="_blank" rel="noreferrer">
                TubaNews
              </a>
            </strong> — Jornalista freelancer. (Dez/2022 – Mar/2023)
          </li>
        </ul>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Cursos Complementares</h2>
        <ul className="mb-3">
          <li>Blockchain, Matemática, Learn to Program — FIAP (2025)</li>
          <li>Git, GitHub, JavaScript — Alura (2025)</li>
          <li>Gestão Financeira e Business Management — FIAP (2025)</li>
        </ul>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Habilidades</h2>
        <ul className="mb-3">
          <li>CRM, Customer Experience, Estratégia Comercial e Automação de Relacionamento</li>
          <li>SEO, Git, HTML, CSS, JavaScript, React, Python e AWS</li>
          <li>Redação, comunicação, foco em conversão de vendas, análise de dados e adaptabilidade</li>
        </ul>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Idiomas</h2>
        <p>
          Inglês avançado (C1) —{' '}
          <a href="https://cert.efset.org/6L4rHZ" target="_blank" rel="noreferrer">
            Certificado EF SET
          </a>
        </p>

        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
          <a href="/curriculo.pdf" className="btn btn-custom btn-curriculo" download>
            <i className="bi bi-download"></i> Baixar Currículo em PDF
          </a>
        </div>
      </div>
    </div>
  )
}
