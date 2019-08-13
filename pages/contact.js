import Link from "next/link";
import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';
import Header from "../components/Header";

export default function Contact() {
    return (
        <div>
            <BaseLayout>
                <Header>
                    <Link href='https://lmedesenvolvimento.github.io/luz-do-saber-home-page/' passHref>
                        <li className="inicio">Início</li>
                    </Link>
                    <Link href="/contact" passHref>
                        <li className="software">software</li>
                    </Link>
                    <Link href="/contact" passHref>
                        <li className="download">Download</li>
                    </Link>
                    <Link href="/contact" passHref>
                        <li className="tutorial">Tutorial</li>
                    </Link>
                    <Link href="/contact" passHref>
                        <li className="forum">Fórum</li>
                    </Link>
                    <Link href="/contact" passHref>
                        <li className="creditos">Créditos</li>
                    </Link>
                    <Link href='https://lmedesenvolvimento.github.io/luz-do-saber-home-page/contact' passHref>
                        <li className="contato selected">Contato</li>
                    </Link>
                </Header>
                <section className="banner full-width">
                    <div className="pagination">
                        <span className="pagination-item">principal</span> <span className="pagination-item">/</span> <span className="pagination-item">contato</span>
                    </div>

                    <div className="container">
                        <div className="row banner-content">
                            <div className="col banner-left-content">
                                <img src="/static/ilustracao_contato.png" alt="Desenho de crianças estudando"height="411px" />
                            </div>

                            <div className="col banner-right-content">
                                <div className="form-header">
                                    <h2>Entre em Contato Conosco!</h2>
                                    <span className="title"><strong>SEDUC (ASTIN):</strong> (85) 3101-3963</span>
                                </div>
                                
                                <form className="form">
                                    <div className="input-group">
                                        <div className="search-bar-itens search-input-container shadow-sm">
                                            <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="NOME" />
                                        </div>

                                        <div className="search-bar-itens search-input-container shadow-sm">
                                            <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="TELEFONE" />
                                        </div>
                                    </div>

                                    <div className="search-bar-itens search-input-container search-input-container-xlarge  shadow-sm">
                                        <input className="search-input search-input-xlarge form-input-font" type="text" name="search" id="search" placeholder="EMAIL" />
                                    </div>

                                    <div className="search-bar-itens outer-card shadow-sm">
                                        <textarea className="inner-card" name="mensagem" id="mensagem" cols="56" rows="4" placeholder="ESCREVA SUA MENSAGEM"></textarea>
                                    </div>
                                    
                                    <div className="search-bar-itens btn-container btn-contact shadow-sm">
                                        <button className="btn search-input btn-font-dark form-input-font">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </BaseLayout>

            <div className="footer">
                <Footer />
            </div>

            <style jsx>{`
                .pagination {
                    background: #50946D;
                }

                .banner {
                    background: url('static/BG_bannerCenario.png');
                }

                .form-control {
                    outline: 1px solid orange;
                }
                .shadow-textarea textarea.form-control::placeholder {
                    font-weight: 300;
                }
                .shadow-textarea textarea.form-control {
                    padding-left: 0.8rem;
                }

                .form-header {
                    margin-bottom: 20px;
                }

                .outer-card {
                    display: flex;
                    justify-content: center;
                    align-itens: center;
                    width: fit-content;
                    padding: 5px;
                    margin: 10px 0 20px 0;
                    border-radius: 30px;
                    background: #fff;
                }

                .inner-card {
                    border: 1px solid #DEDEDE;
                    border-radius: 30px;
                    padding: 10px 15px 10px 15px;;
                    outline: none;
                }

                .banner-right-content {
                    display: flex;
                    flex-direction: column;
                    top: 0;
                }

                .banner-right-content h2 {
                    text-transform: uppercase;
                    font-weight: bold;
                    color: #25a19c;
                }

                .search-input {
                    left: 7px;
                }

                .search-input-large {
                    width: fit-content;
                }

                .search-input-container {
                    margin: 0 10px 20px 0;
                }

                .btn-contact {
                    margin: 30px 0 0 405px;
                }

                .selected {
                    background: #50946D;
                    color: #fff;
                }

                .footer {
                    font-family: 'Itim', cursive;
                    margin-top: 300px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}