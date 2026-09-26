import React from 'react'
import './achievements.css'
import AchievementBox from './Components/AchievementBox'

const Achievements = () => {
    const achievements = [
        {
            title: 'Sistema de Carrinho em PDF',
            company: 'GeoVendas',
            description: 'Desenvolvimento de funcionalidade inovadora para o e-commerce B2B que permite gerar catálogos customizáveis em PDF dos produtos na galeria, com importação automática das quantidades para o carrinho do e-commerce.'
        },
        {
            title: 'WEG Polônia',
            company: 'WEG',
            description: 'Atuei na implantação do fluxo de recebimento fiscal para uma filial na Polônia. A solução consistia em consumir as faturas eletrônicas disponibilizadas pelo sistema fiscal polonês KSeF, realizar o processamento, validação e tratamento dos dados recebidos e, posteriormente, integrar as informações com o SAP Business One por meio de APIs REST, permitindo a contabilização dos itens de forma automatizada.'
        },
        {
            title: 'WEG Bélgica',
            company: 'WEG',
            description: 'Implementação realizada na WEG Bélgica, envolvendo a integração da plataforma interna WEG com o sistema terceiro belga Billit para o consumo e tratamento de faturas eletrônicas no fluxo de recebimento fiscal. Atuei no desenvolvimento da integração e na implementação da lógica de processamento, incluindo a validação dos dados das faturas após o OCR, aplicação das regras de negócio e posterior postagem das faturas no SAP Business One (SAP B1).'
        },
        {
            title: 'WEG Itália',
            company: 'WEG',
            description: 'Implementação que culminou na entrega do fluxo completo do recebimento fiscal. Atuei no desenvolvimento de ponta a ponta, desde a entrada e processamento dos dados via OCR, passando pela integração com um ERP italiano responsável pelo fornecimento das faturas eletrônicas, até a validação, tratamento e preparação das informações para integração com o SAP por meio de RFCs.'
        },
        {
            title: 'WEG Escandinávia',
            company: 'WEG',
            description: 'Desenvolvimento e implementação de regras de negócio para a esteira do contas a pagar, envolvendo fluxos complexos, requisitos fiscais locais e adaptações às particularidades operacionais da filial internacional.'
        }
    ];

    return (
        <div className="achievements-container" data-aos="fade-up" data-aos-delay="500">
            <div className="subtitle">
                <h4>Resultados e Reconhecimentos</h4>
            </div>
            <section>
                {achievements.map((achievement, index) => (
                    <AchievementBox key={index} achievement={achievement} />
                ))}
            </section>
        </div>
    )
}

export default Achievements
