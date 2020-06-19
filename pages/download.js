import Header from "../components/Header";
import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';

export default function Projeto(){
    const linksMateriais = [
        {
            title: 'Luz do Saber - 1º ano',
            src: 'static/downloads/Luz do Saber - 1º ano.pdf',
        },
        {
            title: 'Luz do Saber - 2º ano',
            src: 'static/downloads/Luz do Saber - 2º ano.pdf',
        },
    ]
    const linksOrientacoes = [
        {
            title: 'Luz do Saber - 1º Ano - Caderno de Orientações Didáticas',
            src: 'static/downloads/Luz do Saber - 1º Ano - Caderno de Orientações Didáticas.pdf',
        },
        {
            title: 'Luz do Saber - 2º Ano - Caderno de Orientações Didáticas',
            src: 'static/downloads/Luz do Saber - 2º Ano - Caderno de Orientações Didáticas.pdf',
        },
    ]
    const linksSugestoes1 = [
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 1',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 1.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 2',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 2.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 3',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 3.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 4',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 4.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 5',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 5.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 6',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 6.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 7',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 7.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 8',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 8.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 9',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 9.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 1º Ano semana 10',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 1º Ano semana 10.pdf',
        },

    ]
    const linksSugestoes2 = [
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 1',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 1.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 2',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 2.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 3',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 3.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 4',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 4.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 5',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 5.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 6',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 6.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 7',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 7.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 8',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 8.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 9',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 9.pdf',
        },
        {
            title: 'Luz do Saber - Proposta Domiciliar - 2º Ano semana 10',
            src: 'static/downloads/Luz do Saber - Proposta Domiciliar - 2º Ano semana 10.pdf',
        },
    ]
    return (
        <div id="download">
            <BaseLayout>
                <Header selected="download" />
                <section className="banner full-width">
                  <div className="pagination">
                    <span className="pagination-item">principal</span> <span className="pagination-item">/</span> <span className="pagination-item">Downloads</span>
                  </div>
                  <div className="__content">
                      <h1 className="heading">Downloads</h1>
                      <h3>Materiais didáticos</h3>
                      <LinkList items={linksMateriais} />
                      <h3>Orientações didáticas</h3>
                      <LinkList items={linksOrientacoes} />
                      <br/>
                      <h3>Sugestões semanais de atividades</h3>
                      <p>
                        <h4>1º Ano</h4>
                        <LinkList items={linksSugestoes1} />
                      </p>
                      <p>
                        <h4>2º Ano</h4>
                        <LinkList items={linksSugestoes2} />
                      </p>


                  </div>
                  <div className="footer">
                      <Footer />
                  </div>
                </section>
            </BaseLayout>
            <style jsx>{
                `
                    .pagination {
                        display: flex;
                        align-items: center;
                        position: absolute;
                        background: #FFB151;
                        border-radius: 0;
                        width: 100%;
                        height: 50px;
                        padding: 0 90px;
                        color: #fff;
                        font-size: 0.8em;
                        text-transform: uppercase;
                    }
                    .pagination-item {
                        margin-right: 10px;
                    }
                    #download .__content{
                        margin: 64px 48px 24px;
                    }
                    #download .__content p {
                        font-size: 21px;
                        margin: 48px 0px;
                    }
                    .heading {
                        padding: 16px 0px;
                        margin-bottom: 24px;
                        border-bottom: 1px solid grey;
                    }
                `
            }</style>
        </div>
    )
}

function LinkList ({ items }) {
    return (
        <ul>
            {items.map(({ title, src }) => {
                return (
                    <li>
                        <a href={src} target="_blank" download title={title}>
                            {title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
