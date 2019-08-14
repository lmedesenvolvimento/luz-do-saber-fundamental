import Link from "next/link";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

const Header = (props) => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
            <h1 className="hidden-title">LUZ DO SABER - PORTAL</h1>
            <img className="logo-rosto" src="static/logo-rosto-0.png" alt="Logo Sol Luz do Saber" width="55%" />
            <img src="static/logo-raios.png" alt="Logo Sol Luz do Saber" width="55%" />
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
                <ul className="col-sm menu">
                    { props.children }
                </ul>
            </div>
        </div>

        <style jsx>{`
            .main-nav {
                justify-content: space-around;
                text-transform: uppercase;
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
            
            .logo-rosto {
                position: absolute;
            }
        `}</style>
    </nav>
);

export default Header;