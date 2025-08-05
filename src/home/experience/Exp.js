import React from 'react'
import wegLogo from '../../assets/images/weg-logo-1.png'
import geoLogo from '../../assets/images/download.jpeg'
import xirabaLogo from '../../assets/images/xiraba.jpeg'
import './exp.css'
import ExperienceBox from "./Components/ExperienceBox";

const Exp = () => {
    const experiences = [
            {
                logo: wegLogo,
                role: 'Desenvolvedor Full Stack -',
                type: 'Full Time',
                description: {
                    summary: 'Desenvolvimento de soluções empresariais no projeto WBS (Weg Business Service), com foco em automatização de processos e integração de sistemas corporativos para otimização da venda de serviços.',
                    subtopics: [
                        'Implementação de integrações avançadas com SAP ECC através de RFCs, possibilitando a manipulação automatizada de informações fiscais e dados críticos do negócio em tempo real.',
                        'Desenvolvimento de integração pioneira com SharePoint utilizando scripts customizados, viabilizando o gerenciamento eficiente de documentos e fluxos de trabalho corporativos.',
                        'Customização e otimização de formulários dinâmicos na plataforma, permitindo a solicitação e liberação de acessos com validações automatizadas.',
                        'Implementação de funcionalidades específicas para atendimento de metas PWQP, incluindo desenvolvimento de dashboards analíticos para monitoramento de KPIs.',
                        'Execução de apresentações técnicas das novas funcionalidades desenvolvidas, garantindo o alinhamento entre equipes e a correta utilização dos recursos implementados.',
                        'Colaboração no desenvolvimento da integração com GPT e WEG Gen AI na plataforma WBS'
                    ],
                    technologies: 'JavaScript e Java, integrações com SAP ECC, Sharepoint, gpt e outros'
                },
                duration: '07/24 - trabalho aqui atualmente'
            },
            {
                logo: geoLogo,
                role: 'Desenvolvedor Full Stack -',
                type: 'Full Time',
                technologies: '',
                description: {
                    summary: 'Atuação no desenvolvimento de soluções empresariais complexas, com foco em sistemas CRM e plataformas E-commerce B2B, utilizando arquitetura orientada a serviços e práticas de clean code.',
                    subtopics: [
                        'Arquitetura e implementação de sistema inovador de carrinho em PDF utilizando AWS S3 para armazenamento, permitindo a geração dinâmica de catálogos personalizados e importação automática de dados para o e-commerce.',
                        'Desenvolvimento de API RESTful em Java com Spring Boot, implementando integrações robustas com múltiplos ERPs e garantindo a sincronização eficiente de dados entre sistemas.',
                        'Implementação de módulo de agenda no CRM com integração ao WhatsApp, utilizando Vue.js e TypeScript para criar interfaces responsivas e interativas, similar ao Google Agenda.',
                        'Desenvolvimento de dashboards analíticos personalizados utilizando Vaadin, possibilitando visualização em tempo real de métricas de negócio e tomada de decisão baseada em dados.',
                        'Criação de formulários interativos para gestão de clientes e prospects com validações complexas, utilizando Vue.js e implementando integrações com API Java via REST.',
                        'Otimização do processo de documentação técnica e transferência de conhecimento, resultando em redução da fila de projetos e melhoria da eficiência do repasse.'
                    ],
                    technologies: 'Vue, Java, Vaadin, Spring Boot, Hibernate, PHP, C#, AWS, Docker, TypeScript, Javascript, JQuery, BootStrap, PostgreSQL e MariaDB.'
                },
                duration: '06/23 - 07/24'
            },
            {
                logo: wegLogo,
                role: 'Desenvolvedor Full Stack -',
                type: 'Estágio',
                description: {
                    summary: 'Atuação no desenvolvimento do sistema de vendas internacionais, focando na centralização de informações e implementação de processos automatizados para otimização de vendas.',
                    subtopics: [
                        'Implementação de práticas de conventional commits e integração contínua, melhorando a rastreabilidade do código e a eficiência do processo de deploy.',
                        'Desenvolvimento de sistema de KPIs utilizando Angular e Node.js, permitindo análise detalhada do desempenho da equipe de vendas.',
                        'Criação de integrações automatizadas entre e-commerce e SAP utilizando TypeScript e Sequelize, garantindo sincronização eficiente de dados.',
                        'Implementação de rotinas automatizadas para processamento de dados utilizando Express e MySQL, otimizando processos operacionais.'
                    ],
                    technologies: 'Angular, Node, TypeScript, Sequelize, Express, MySQL, OracleDB e Clean Code.'
                },
                duration: '03/23 - 06/23'
            }
        ];

    return (
        <div className="exp-container" data-aos="fade-up" data-aos-delay="400">
            <div className="subtitle">
                <h4>Experiência</h4>
            </div>
            <section>
                {experiences.map((experience, index) => (
                    <ExperienceBox key={index} experience={experience}/>
                ))}
            </section>
        </div>
    )
}

export default Exp
