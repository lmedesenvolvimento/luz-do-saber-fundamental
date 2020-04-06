import Header from "../components/Header";
import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <BaseLayout>

                <Header selected="contato" />

                <section className="banner full-width">
                    <div className="pagination">
                        <span className="pagination-item">principal</span> <span className="pagination-item">/</span> <span className="pagination-item">contato</span>
                    </div>

                    <div className="container">
                        <div className="row banner-content">
                            <div className="col banner-left-content">
                                <img src="static/ilustracao_contato.png" alt="Desenho de crianças estudando"height="411px" />
                            </div>

                            <div className="col banner-right-content">
                                <div>
                                    <h2>Entre em Contato Conosco!</h2>
                                    <span className="title"><strong>E-mail:</strong> marcosdionisio@gmail.com</span>
                                </div>

                                {/*
                                  <form className="form">
                                    <div className="input-group">
                                        <div className="search-bar-itens search-input-container shadow-sm">
                                            <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="NOME" />
                                        </div>

                                        <div className="search-bar-itens search-input-container shadow-sm">
                                            <input className="search-input form-input-font" type="text" name="search" placeholder="TELEFONE" />
                                        </div>
                                    </div>

                                    <div className="search-bar-itens search-input-container search-input-container-xlarge  shadow-sm">
                                        <input className="search-input search-input-xlarge form-input-font" type="text" name="search" placeholder="EMAIL" />
                                    </div>

                                    <div className="search-bar-itens outer-card shadow-sm">
                                        <textarea className="inner-card" name="mensagem" id="mensagem" cols="50" rows="4" placeholder="ESCREVA SUA MENSAGEM"></textarea>
                                    </div>

                                    <div className="search-bar-itens btn-container shadow-sm">
                                        <button className="btn search-input btn-font-dark form-input-font">Enviar</button>
                                    </div>
                                </form>
                                */}
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

                .banner {
                    background: url('static/BG_bannerCenario.png');
                }

                .banner-right-content {
                    position: absolute;
                    width: auto;
                    right: 115px;
                    top: 100px;
                    text-align: left;
                    color: #fff;
                    text-transform: uppercase;
                }
                .banner-right-content > h2 {
                    font-size: 1.7em;
                }

                .form-head {
                    width: 100%;
                    padding: 0 20px;
                }
                .shadow-textarea textarea::placeholder {
                    font-weight: 300;
                }
                .outer-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: fit-content;
                    height: fit-content;
                    padding: 5px;
                    margin: 15px 0 20px 0;
                    border-radius: 20px;
                    background: #fff;
                    width: 505px;
                }
                .inner-card {
                    border: 1px solid #DEDEDE;
                    border-radius: 20px;
                    padding: 10px 15px 10px 15px;
                    outline: none;
                }
                .btn-container {
                    top: 160px;
                    left: 386px;
                }

                .search-input {
                    left: 7px;
                    top: 5px;
                }

                .search-input-large {
                    width: fit-content;
                }

                .search-input-container {
                    margin-right: 10px;
                    margin-top: 20px;
                }

                .footer {
                    font-family: 'Itim', cursive;
                    margin-top: 300px;
                    text-align: center;
                }

                @media (min-width: 320px) and (max-width: 1199px) {
                    .full-width {
                        height: 590px;
                    }
                    .banner-right-content {
                        position: absolute;
                        top: 100px;
                        right: 0;
                        text-align: left;
                        color: #fff;
                        text-transform: uppercase;
                        left: 5%;
                    }
                    .banner-right-content h2 {
                        font-size: 1.5em;
                    }
                    .form-head > h2 {
                        font-size: 1.2em;
                    }

                    .search-input-container {
                        margin-top: 7px;
                    }

                    .form > .search-bar-itens {
                        margin: 7px 0;
                    }

                    .outer-card {
                        width: 80%;
                    }
                    .inner-card {
                        width: 100%;
                    }

                    .btn-container {
                        left: 0;
                    }
                }
            `}</style>
        </div>
    );
}
