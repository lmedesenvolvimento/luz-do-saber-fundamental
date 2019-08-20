import Link from "next/link";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

const Header = (props) => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
            <h1 className="hidden-title">LUZ DO SABER - PORTAL</h1>
            <img className="logo-rosto" src="static/logo-rosto-0.png" alt="Logo Sol Luz do Saber" />
            <img className="logo-raio" src="static/logo-raios.png" alt="Logo Sol Luz do Saber" />
        </div>
        </div>
        <div className="col-sm-8 nav-search">
            <div className="row search-bar">
                <div className="search-bar-itens search-input-container shadow-sm">
                    <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="O QUE VOCÊ PROCURA?" />
                </div>
                <form className="search-bar-itens btn-container shadow-sm" action="https://luz-do-saber-staging.herokuapp.com/#/" target="_blank">
                    <button className="btn btn-font-light form-input-font">Entrar</button>
                </form>
                <div className="search-bar-itens btn-container shadow-sm">
                    <button className="btn btn-font-dark form-input-font">Instalar</button>
                </div>
            </div>
            <div className="row">

                <input id="menu-hamburguer" type="checkbox" />

                <label for="menu-hamburguer">
                    <div className="menu-sm">
                        <span className="hamburguer"></span>
                    </div>
                </label>

                <ul className="col-sm menu">
                    { props.children }
                </ul>
            </div>
        </div>

        <style jsx>{`
            *:before,
            *:after {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .menu-sm {
                background: #FFB151;
                border-radius: 50%;
                width: 60px;
                height: 60px;
            }

            .hamburguer {
                position: relative;
                display: block;
                background: #000;
                width: 30px;
                height: 2px;
                top: 29px;
                left: 15px;
                transition: .5s ease-in-out;
            }

            .hamburguer:before,
            .hamburguer:after {
                background: #000;
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                transition: .5s ease-in-out;
            }

            .hamburguer:before {
                top: -10px;
            }

            .hamburguer:after {
                bottom: -10px;
            }

            input[type=checkbox] {
                display: none;
            }

            input:checked ~ label .hamburguer {
                transform: rotate(45deg);
            }

            input:checked ~ label .hamburguer:before {
                transform: rotate(90deg);
                top: 0;
            }

            input:checked ~ label .hamburguer:after {
                transform: rotate(90deg);
                bottom: 0;
            }









            .main-nav {
                justify-content: space-around;
                text-transform: uppercase;
                height: 140px;
            }
            .hidden-title {
                visibility: hidden;
                position: absolute;
            }
            .nav-search {
                font-family: 'Itim', cursive;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .search-bar {
                position: absolute;
                right: 70px;
                top: 30px;
            }
        `}</style>
    </nav>
);

export default Header;