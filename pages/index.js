import Link from "next/link";
import BaseLayout from '../components/Base-Layout';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
    return (
        <div>
            <BaseLayout>
                <Header>
                    <Link href='https://lmedesenvolvimento.github.io/luz-do-saber-home-page/' passHref>
                        <li className="inicio selected">Início</li>
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
                        <li className="contato">Contato</li>
                    </Link>
                </Header>

                <section className="banner full-width">
                    <div className="container">
                        <div className="row banner-content">
                            <div className="col banner-left-content">
                                <img src="static/Ilustracao.png" alt="Desenho de crianças estudando" width="532px" height="441px" />
                            </div>

                            <div className="col banner-right-content">
                                <h2>Os melhores jogos <br />e atividades para <br />aprender brincando!</h2>

                                <span className="section-text">Clique no botão abaixo para iniciar</span>

                                <Link href="http://luz-do-saber-portal-staging.herokuapp.com/#/" passHref>
                                    <a target="_blank">
                                        <div className="play-button">
                                            <div>
                                                <div className="outer-card rounded-circle">
                                                    <div className="inner-card">
                                                        <img src="static/btn_iniciar.svg" alt="" width="38px;" />
                                                    </div>
                                                </div>

                                                <div className="search-bar-itens shadow-lg play-card play-card-outer">
                                                    <button className="btn search-input form-input-font btn-font-orange play-card">Iniciar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="atividades">
                    <div className="section-head">
                        <h4 className="subtitle">O que você vai encontrar?</h4>
                        <span className="section-text">Veja o que oferecemos para auxiliar o seu aprendizado!</span>
                    </div>
                    <div className="row">
                        <div className="col atividades-content">
                            <img src="static/icon-jogos.png" alt="" />
                            <p>Jogos <br />Educativos</p>
                            <span className="section-text">Divirta-se e aprenda com jogos como quebra-cabeça, bingo e diversos outros disponíveis!</span>
                        </div>
                        <div className="col atividades-content">
                            <img src="static/icon-divertidas.png" alt="" />
                            <p>Atividades <br />Divertidas</p>
                            <span className="section-text">Resolva atividades desafiadoras, crie gibis e jornais e teste seus conhecimentos!</span>
                        </div>
                        <div className="col atividades-content">
                            <img src="static/icon-personalizadas.png" alt="" />
                            <p>Atividades Personalizadas</p>
                            <span className="section-text">Jogue ou faça as atividades escritas e editadas pelo seu professor!</span>
                        </div>
                    </div>
                </section>

                <section className="news full-width">
                    <div className="container">
                        <div className="section-head">
                            <h4 className="subtitle white-header">Receba nossas novidades!</h4>
                            <span className="newsletter-call">Envie seu e-mail para ficar por dentro de tudo!</span>
                        </div>

                        <div className="row form">
                            <div className="search-bar-itens search-input-container shadow-sm">
                                <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="ESCREVA SEU NOME" />
                            </div>
                            <div className="search-bar-itens search-input-container search-input-container-large shadow-sm">
                                <input className="search-input search-input-large form-input-font" type="text" name="search" id="search" placeholder="ESCREVA SEU E-MAIL" />
                            </div>
                            <div className="search-bar-itens btn-container shadow-sm">
                                <button className="btn btn-font-dark form-input-font">Enviar</button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </BaseLayout>

            <style jsx>{`
                .section-text {
                    color: #AEAEAE;
                    font-size: 1.1em;
                }
                .banner {
                    background: url('static/BG_bannerCenario.png');
                }
                .banner-right-content {
                    left: 70px;
                }
                .banner-right-content h2 {
                    text-transform: uppercase;
                    font-weight: bold;
                    color: #25a19c;
                }
                .play-button {
                    position: relative;
                    top: 25px;
                    left: -10px;
                    cursor: pointer;
                }
                .outer-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    z-index: 2;
                    width: 90px;
                    height: 90px;
                    background: #fff;
                    -webkit-box-shadow: 0px 0px 5px 2px rgba(50, 50, 50, 1);
                    -moz-box-shadow:    0px 0px 5px 2px rgba(50, 50, 50, 1);
                    box-shadow:         -1px 2px 5px 1px rgba(50, 50, 50, 0.3);
                }
                .inner-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 82px;
                    height: 82px;
                    border: 3px solid #CA8C40;
                    background: #ffb248;
                    border-radius: 50px;
                }
                .inner-card > img {
                    margin-left: 5px;
                }
                .play-card {
                    position: absolute;
                    width: 153px;
                    height: 64px;
                    border-radius: 20px;
                    font-size: 1.2em;
                    z-index: 1;
                }
                .play-card-outer {
                    position: relative;
                    top: 12px;
                    left: 60px;
                    width: 160px;
                    height: 70px;
                }
                .atividades {
                    position: relative;
                    font-family: 'Itim', cursive;
                    padding-top: 588px;
                }
                .section-head {
                    text-align: center;
                    padding-top: 50px;
                }
                .white-header {
                    color: #fff;
                }
                .newsletter-call {
                    font-size: 1.5em;
                    color: #ffeac1;
                }
                .atividades-content {
                    text-align: center;
                    padding: 60px;
                }
                .atividades-content > img {
                    margin-bottom: 25px;
                }
                .atividades-content > p {
                    font-size: 1.6em;
                    font-weight: bold;
                    color: #555555;
                }
                .news {
                    font-family: 'Itim', cursive;
                    background: url('static/bg-news.png');
                    height: 280px;
                }
                .form {
                    justify-content: center;
                    padding: 50px;
                }
                .search-input-container {
                    margin-left: 20px;
                }
                .search-input-container-large {
                    width: 349px;
                }

                .selected {
                    background: #FFB151;
                    color: #fff;
                }
            `}</style>
        </div>
    );
}