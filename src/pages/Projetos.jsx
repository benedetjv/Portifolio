import React, { useState } from 'react'

function Gallery({ images }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i) => { setIndex(i); setOpen(true) }
  const prev = () => setIndex((index - 1 + images.length) % images.length)
  const next = () => setIndex((index + 1) % images.length)

  return (
    <div>
      <img
        src={images[0]}
        alt="Imagem principal do projeto"
        className="img-fluid rounded imagem-principal"
        onClick={() => openAt(0)}
      />
      <div className="d-flex flex-wrap gap-2 mt-2">
        {images.slice(1).map((src, i) => (
          <img
            key={i}
            src={src}
            className="miniatura"
            alt={`Miniatura ${i + 1}`}
            onClick={() => openAt(i + 1)}
          />
        ))}
      </div>

      {open && (
        <div
          className="modal fade show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-light">
              <div className="modal-body text-center">
                <img src={images[index]} className="img-fluid rounded" alt="Imagem expandida" />
                <div className="mt-3 d-flex justify-content-between">
                  <button className="btn btn-outline-dark" onClick={prev}>
                    Previous
                  </button>
                  <button className="btn btn-outline-dark" onClick={next}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projetos() {
  // === IMAGENS DOS PROJETOS ===
  const furiaImgs = [
    '/img/foto-home-furia-experience.jpeg',
    '/img/foto-batepapo-ia-furia-experience.jpeg',
    '/img/foto-ranking-furia-experience.jpeg',
    '/img/foto-line-up-furia-experience.jpeg',
    '/img/foto-noticias-hltv-furia-experience.jpeg',
    '/img/foto-partidas-furia-experience.jpeg',
  ]

  const feiraImgs = [
    '/img/feira-homepage.jpg',
    '/img/aba-de-produtos.jpg',
    '/img/fale-conosco.jpg',
    '/img/feira-continuacao-homepage.jpg',
    '/img/footer.jpg',
    '/img/sobre-nos.jpg',
    '/img/sobre-nos-2.jpg',
  ]

  const getSafeImgs = [
    '/img/getsafe-home.jpg',
    '/img/getsafe-mapa.jpg',
    '/img/getsafe-feed.jpg',
  ]

  const otisImgs = [
    '/img/tela-dashboard-otis-sky-manage.jpg',
    '/img/tela-login-otis-sky-manage.jpg',
    '/img/tela-mapa-interativo-otis-sky-manage.jpg',
    '/img/tela-rastreamento-otis-sky-manage.jpg',
    '/img/tela-corretiva-otis-sky-manage.jpg',
    '/img/tela-estoque-otis-sky-manage.jpg',
    '/img/tela-catalogo-otis-skymanage.jpg',

    '/img/tela-usuarios-otis-sky-manage.jpg',
  ]

  const techLearnImgs = [
    '/img/techlearn-homepage.jpg',
    '/img/techlearn-paginaprincipal.jpg',
    '/img/techlearn-cursos.jpg',
    '/img/techlearn-aulas.jpg',
    '/img/techlearn-comunidade.jpg',
    '/img/techlearn-perfil.jpg',
    '/img/techlearn-vagas.jpg',
    '/img/techlearn-certificados.jpg',
    '/img/techlearn-certificado-de-conclusao.jpg',
    '/img/techlearn-aba-de-cursos-concluidos.jpg',
    '/img/techlearn-quiz.jpg',
    '/img/techlearn-quiz-respostas.jpg',
  ]

  const drOttoImgs = [
    '/img/drotto-homepage-1.jpg'
  ]

  return (
    <div className="projetos-page">
      <div className="container my-5">

        {/* Fúria Experience */}
        <div className="row g-5 align-items-start projeto mb-5">
          <div className="col-md-6">
            <Gallery images={furiaImgs} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">FURIA Experience - Plataforma para fãs da FURIA</h4>
            <small className="text-muted">2025</small>
            <p className="mt-2">
              Meu primeiro projeto em Python, nascido da vontade de unir minha paixão por CS com a migração para a área de tecnologia. O FURIA Experience é um chatbot conversacional e dashboard interativo desenvolvido para aproximar o torcedor da organização.
            </p>
            <ul>
              <li>Modo Bate-Papo com IA: Chatbot treinado com fine-tuning na OpenAI para responder sobre a FURIA</li>
              <li>Ranking HLTV: Monitoramento em tempo real da posição, pontos e Top 30</li>
              <li>Line-up Atual: Exibição dinâmica dos jogadores e coach</li>
              <li>Agenda de Jogos: Verificação automática de partidas do dia</li>
              <li>Tecnologias: Python, Streamlit, Selenium, Playwright, OpenAI API, FAISS</li>
            </ul>
            <div className="d-flex gap-2 mt-3">
              <a
                href="https://github.com/benedetjv/furia-experience"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000080' }}
                target="_blank"
                rel="noreferrer"
              >
                Repositório do projeto
              </a>
            </div>
          </div>
        </div>

        {/* Feira Online */}
        <div className="row g-5 align-items-start projeto mb-5">
          <div className="col-md-6">
            <Gallery images={feiraImgs} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">Feira - E-commerce de Produtos Agrícolas com Blockchain</h4>
            <small className="text-muted">2025</small>
            <p className="mt-2">
              A FEIRA é uma plataforma digital inovadora que revoluciona a cadeia de suprimentos de alimentos, conectando consumidores diretamente a produtores rurais. Nosso foco é em produtos frescos, de qualidade e na garantia de transações éticas e transparentes através da tecnologia Blockchain.
            </p>
            <ul>
              <li>Blockchain Integrado: Rastreabilidade e segurança de cada transação</li>
              <li>Modelo Produtor-Consumidor: Venda direta entre agricultor e cliente</li>
              <li>Filtros Inteligentes: Busca por região, tipo e agrotóxicos com mapa interativo</li>
              <li>Sustentabilidade: Promoção de economia justa sem intermediários</li>
              <li>Experiência de Compra: Carrinho, checkout completo e simulação de frete</li>
            </ul>

            <div className="d-flex gap-2 mt-3">
              <a
                href="https://youtu.be/WrPPwJ_AHos?si=H0G5XzWHnnQwT_3P"
                className="btn btn-danger btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                Vídeo de Apresentação do Projeto
              </a>
              <a
                href="https://github.com/benedetjv/Feira"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000080' }}
                target="_blank"
                rel="noreferrer"
              >
                Repositório do projeto
              </a>
            </div>
          </div>
        </div>

        {/* GetSafe */}
        <div className="row g-5 align-items-start projeto mb-5">
          <div className="col-md-6">
            <Gallery images={getSafeImgs} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">GetSafe - Segurança colaborativa urbana</h4>
            <small className="text-muted">2025</small>
            <p className="mt-2">
              GetSafe é uma plataforma web colaborativa que conecta pessoas em situações de risco com quem pode ajudar e contato direto com órgãos responsáveis, durante desastres naturais como enchentes, chuvas extremas, calor intenso ou frio severo. A proposta é construir uma rede solidária digital que promova respostas rápidas e eficientes diante de eventos climáticos acentuados.
            </p>
            <ul>
              <li>Cadastro e login de usuários</li>
              <li>Mapa com visualização de alertas (imagem interativa com pins dinâmicos)</li>
              <li>Reporte de situações de emergência com preenchimento de dados</li>
              <li>Feed de atualizações com postagens da comunidade</li>
              <li>Botões de interação: seguir, ajudar, visualizar detalhes</li>
              <li>Tecnologias: HTML5, CSS3, JavaScript, Bootstrap 5, Node.js</li>
            </ul>
            <p>
              <a
                href="https://www.linkedin.com/posts/benedetjoao_certificado-ganhador-da-global-solution-activity-7348480987250442240-fsuV"
                target="_blank"
                rel="noreferrer"
              >
                Certificado da premiação
              </a>.
            </p>
            <div className="d-flex gap-2 mt-2">
              <a
                href="https://www.youtube.com/watch?v=YSXdZc_2mZU&feature=youtu.be"
                className="btn btn-danger btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                Vídeo de Apresentação do Projeto
              </a>
              <a
                href="https://github.com/benedetjv/GS1"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000080' }}
                target="_blank"
                rel="noreferrer"
              >
                Repositório do projeto
              </a>
            </div>
          </div>
        </div>

        {/* Otis Sky Manage */}
        <div className="row g-5 align-items-start projeto mb-5">
          <div className="col-md-6">
            <Gallery images={otisImgs} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">Otis Sky Manage - Plataforma corporativa</h4>
            <small className="text-muted">2025</small>

            <p className="mt-2">
              Plataforma corporativa para centralizar a gestão de instalações e manutenções de elevadores
              em toda a América Latina. Resolve a falta de integração entre vendas, fábrica e campo,
              reduzindo atrasos, falhas de comunicação e melhorando a rastreabilidade dos processos.
            </p>

            <ul>
              <li>Login seguro e controle de permissões por perfil</li>
              <li>Dashboard com KPIs de prazo, custo e qualidade em tempo real</li>
              <li>Pesquisa inteligente (estoque, clientes, filiais, contratos e pedidos)</li>
              <li>Ordens de Serviço preventiva/corretiva/instalação com histórico completo</li>
              <li>Rastreamento por status, cliente, obra e mês de entrega</li>
              <li>Estoque de peças e componentes em tempo real</li>
              <li>Gestão de fornecedores e filiais com dados centralizados</li>
              <li>Catálogo interativo de elevadores (dados técnicos, capacidade, velocidade)</li>
              <li>Feedbacks por OS para melhoria contínua e transparência</li>
            </ul>

            <p className="fst-italic">
              Impacto: operação unificada em um único sistema, com rastreabilidade ponta a ponta e
              decisões baseadas em dados — do escritório à instalação em campo. Otis Sky Manage: tecnologia, eficiência e transparência, elevando a gestão de serviços a um novo patamar.
            </p>

            <div className="d-flex gap-2 mt-3">
              <a
                href="https://www.youtube.com/watch?v=LDSe6MKJBlo&t=1s"
                className="btn btn-danger btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                Vídeo de Apresentação do Projeto
              </a>
              <a
                href="https://github.com/benedetjv/Otis-Skymanage"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000080' }}
                target="_blank"
                rel="noreferrer"
              >
                Repositório do projeto
              </a>
            </div>
          </div>
        </div>

        {/* TechLearn */}
        <div className="row g-5 align-items-start projeto mb-5">
          <div className="col-md-6">
            <Gallery images={techLearnImgs} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">TechLearn - Plataforma de Estudos em Tecnologia</h4>
            <small className="text-muted">2025</small>
            <p className="mt-2">
              A TechLearn é uma plataforma educacional desenvolvida em React para o aprendizado de diversas áreas da tecnologia, com cursos em vídeo, fóruns de discussão, certificados digitais, área de vagas e perfil do estudante.
              Ela foi projetada para ser intuitiva, responsiva e escalável, oferecendo uma experiência contínua e personalizada de aprendizado.
            </p>
            <ul>
              <li>Sistema de login/cadastro e Recuperação de senha</li>
              <li>Player de aulas com progresso salvo</li>
              <li>Fórum de discussão colaborativa</li>
              <li>Geração de certificado de conclusão</li>
              <li>Área de vagas e Perfil do estudante</li>
              <li>Tecnologias: React + Vite, CSS modularizado, JSON Server (simulação)</li>
            </ul>
            <div className="d-flex gap-2 mt-3">
              <a
                href="https://youtu.be/dIgqcyf3xQc?si=_s5lW6qQGE8XZeaV"
                className="btn btn-danger btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                Vídeo de Apresentação do Projeto
              </a>
              <a
                href="https://github.com/benedetjv/GS2"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000080' }}
                target="_blank"
                rel="noreferrer"
              >
                Repositório do projeto
              </a>
            </div>
          </div>
        </div>

        {/* Dr. Otto Beckedorff — NOVO PROJETO */}
        <div className="row g-5 align-items-start projeto mb-5">
          <div className="col-md-6">
            <Gallery images={drOttoImgs} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">Dr. Otto Beckedorff - Website</h4>
            <small className="text-muted">2025</small>
            <p className="mt-2">
              Website desenvolvido para médico especialista em Ortopedia e Tratamento da Dor. O projeto foca em alta performance e otimização para mecanismos de busca (SEO) através de tecnologias modernas de renderização.
            </p>
            <ul>
              <li>SEO Avançado: Implementação de Dados Estruturados (JSON-LD) para visibilidade local.</li>
              <li>Arquitetura Modular: Componentes React reutilizáveis integrados com o sistema de rotas do Next.js.</li>
              <li>Performance: Otimização automática de imagens e carregamento de fontes do Google.</li>
              <li>Gestão de Conteúdo: Centralização de textos em um arquivo de dados, facilitando atualizações.</li>
              <li>Tecnologias: Next.js 14, React, Bootstrap 5, JSON-LD.</li>
            </ul>
            <div className="d-flex gap-2 mt-3">
              <a
                href="https://drotto.com.br/"
                className="btn btn-sm text-white"
                style={{ backgroundColor: '#000080' }}
                target="_blank"
                rel="noreferrer"
              >
                Link do site
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}