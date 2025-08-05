import React from 'react'
import './aboutme.css'

const getAge = (tDate) => {
  const birthDate = new Date(tDate);
  const curDate = new Date();

  let age = curDate.getFullYear() - birthDate.getFullYear();

  if (curDate.getMonth() < birthDate.getMonth()) {
    age--;
  }

  return age;
}

const AboutMe = () => {
  const myAge = getAge('2002-09-09');

  return (
    <div
      className="aboutme-container"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <div className="subtitle">
        <h4>Sobre Mim</h4>
      </div>
      <div className="aboutme-text">
        <p>
            Desenvolvedor Full Stack com sólida experiência em desenvolvimento web e
            integração de sistemas empresariais, tendo atuado em projetos complexos para
            empresas como WEG e GeoVendas. Possuo expertise no desenvolvimento de aplicações
            com Java, Spring Boot, Vue.js e Node.js, além de amplo conhecimento em bancos de dados
            relacionais (PostgreSQL, MySQL) e tecnologias cloud (AWS). Experiência comprovada na
            implementação de integrações com sistemas empresariais como SAP ECC e SharePoint, bem
            como no desenvolvimento de APIs RESTful e aplicações web responsivas.
        </p>
          <p>
              Destaco-me pela capacidade de entregar soluções completas e escaláveis, desde o desenvolvimento
              backend com Java e Spring Boot até interfaces dinâmicas com Vue.js e Angular. Possuo histórico
              comprovado na otimização de processos de desenvolvimento, tendo contribuído para a redução na
              fila de projetos e melhorado a eficiência no repasse de projetos através de documentação estruturada.
              Atualmente, desenvolvo soluções para o projeto WBS (Weg Business Service), onde aplico práticas de Clean
              Code e metodologias ágeis para garantir a qualidade e manutenibilidade do código.
          </p>
      </div>
    </div>
  )
}

export default AboutMe
