import ReactDOM from "react-dom";
import Link from "./Link";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.selected = "";
  }

  componentWillUnmount() {
    let elementsSelected = ReactDOM.findDOMNode(this).getElementsByClassName(
      "selected"
    );

    for (let index = 0; index < elementsSelected.length; index++) {
      const element = elementsSelected[index];
      element.classList.remove("selected");
      console.log(element.classList);
    }
  }

  render() {
    return (
      <nav className="d-flex row main-nav">
        <div className="col-sm">
          <div className="row logo">
            <h1 className="hidden-title">LUZ DO SABER - PORTAL</h1>
            <img
              className="logo-rosto"
              src="static/logo-rosto-0.png"
              alt="Logo Sol Luz do Saber"
              width="55%"
            />
            <img
              className="logo-sol"
              src="static/logo-raios.png"
              alt="Logo Sol Luz do Saber"
              width="55%"
            />
          </div>
        </div>
        <div className="col-sm-8 nav-search">
          <div className="row search-bar">
            <div className="search-bar-itens search-input-container shadow-sm">
              <input
                className="search-input form-input-font"
                type="text"
                name="search"
                id="search"
                placeholder="O QUE VOCÊ PROCURA?"
              />
            </div>
            <form
              className="search-bar-itens btn-container shadow-sm"
              action="https://luz-do-saber-staging.herokuapp.com/#/"
              target="_blank"
            >
              <button className="btn search-input btn-font-light form-input-font">
                Editar
              </button>
            </form>
            <div className="search-bar-itens btn-container shadow-sm">
              <button className="btn search-input btn-font-dark form-input-font">
                Instalar
              </button>
            </div>
          </div>
          <div className="hamburguer-container">
            <input id="menu-hamburguer" type="checkbox" />

            <label htmlFor="menu-hamburguer">
              <div className="menu-hamburguer">
                <span className="hamburguer"></span>
              </div>
            </label>
            <div className="row menu-container">
              <ul className="col-sm menu">
                <HeaderItem 
                  href="/" 
                  selected={this.props.selected} 
                  to="inicio"
                >
                    Início
                </HeaderItem>
                <HeaderItem 
                  href="/projeto" 
                  selected={this.props.selected} 
                  to="projeto"
                >
                    Projeto
                </HeaderItem>
                <HeaderItem 
                  href="/download" 
                  selected={this.props.selected} 
                  to="download"
                >
                    Downloads
                </HeaderItem>
                <HeaderItem to="tutorial">
                  Tutorial
                </HeaderItem>
                <HeaderItem to="forum">
                  Fórum
                </HeaderItem>                
                <HeaderItem to="creditos">
                  Créditos
                </HeaderItem>                
                <HeaderItem 
                  href="/contato" 
                  selected={this.props.selected} 
                  to="contato"
                >
                  Contato
                </HeaderItem>                                
              </ul>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 1200px) {
            .hamburguer-container > input,
            .hamburguer-container > label {
              display: none;
            }
            .main-nav {
              justify-content: space-around;
              text-transform: uppercase;
            }
            .hidden-title {
              visibility: hidden;
              position: absolute;
            }
            .nav-search {
              font-family: "Itim", cursive;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .search-bar {
              position: absolute;
              right: 70px;
              top: 25px;
            }

            .menu {
              position: absolute;
              bottom: -17px;
            }

            .menu li {
              display: inline-block;
              padding: 10px;
              width: 100px;
              font-size: 0.8em;
              text-align: center;
              border: 1px solid #f0f0f0;
              margin-left: 1px;
            }

            .menu li:hover {
              cursor: pointer;
            }

            .menu li a {
              color: #333;
              text-decoration: none;
              display: block;
            }

            .menu .inicio {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .inicio:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .projeto {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .projeto:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .download {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .download:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .tutorial {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .tutorial:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .forum {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .forum:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .creditos {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .creditos:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .contato {
              border: 1px solid transparent;
              border-top: 4px solid rgba(24, 65, 109, 0.15);
            }
            .menu .contato:hover {
              background: #ffb151;
              color: #fff;
            }

            .selected {
              background: #ffb151;
            }

            .disabled {
              background: #d3d3d3;
              color: #fff;
              border-top: 3px solid #d3d3d3;
            }

            .logo-rosto {
              position: absolute;
            }

            button,
            input {
              top: 6px;
              left: 7px;
            }
          }

          @media (min-width: 320px) and (max-width: 1199px) {
            /*
                        *
                        *   MENU HAMBURGUER
                        *
                        */
            .hamburguer-container > input {
              display: none;
            }
            .hamburguer-container {
              position: fixed;
              top: 16px;
              background: #fff;
              border-radius: 50%;
              width: 60px;
              height: 60px;
              right: 30px;
            }
            .menu-hamburguer {
              position: fixed;
              top: 16px;
              background: #fff;
              border-radius: 50%;
              width: 60px;
              height: 60px;
              right: 30px;
            }
            .hamburguer {
              position: absolute;
              display: block;
              width: 30px;
              height: 2px;
              top: 28px;
              right: 15px;
              background: #000;

              transition: 0.5s ease-in-out;
            }
            .hamburguer:before,
            .hamburguer:after {
              background: #000;
              content: "";
              display: block;
              width: 30px;
              height: 2px;
              position: absolute;

              transition: 0.5s ease-in-out;
            }
            .hamburguer:before {
              top: -10px;
            }

            .hamburguer:after {
              bottom: -10px;
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

            input:checked ~ .menu-container {
              transform: translateX(300px);
            }
            /*
                        *
                        *   MENU HAMBURGUER
                        *
                        */

            .main-nav {
              justify-content: space-around;
              text-transform: uppercase;
            }
            .hidden-title {
              visibility: hidden;
              position: absolute;
            }
            .nav-search {
              font-family: "Itim", cursive;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 10;
            }
            .search-bar {
              display: none;
              position: absolute;
              right: 70px;
              top: 50px;
            }
            .search-bar-itens:first-child {
              /* BARRA DE PESQUISA */
              display: none;
            }
            .menu-container {
              position: fixed;
              background: rgb(92, 183, 204);
              background: linear-gradient(
                90deg,
                rgba(92, 183, 204, 0.9) 49%,
                rgba(48, 142, 163, 0.9) 100%,
                rgba(9, 9, 121, 0.9) 100%
              );
              top: 0;
              left: -300px;
              width: 300px;
              height: 100%;

              transition: all 0.3s linear;
            }
             {
              /* .expanded {
                            transform: translateX(300px);
                        } */
            }
            .menu {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .menu li {
              display: block;
              padding: 10px;
              width: 60%;
              font-size: 1em;
              text-align: center;
              margin: 15px;
              color: #fff;
              font-weight: bold;
            }

            .menu li:hover {
              cursor: pointer;
            }

            .menu li a {
              color: #fff;
              text-decoration: none;
              display: block;
            }

            .menu .inicio {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .inicio:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .software {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .software:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .download {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .download:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .tutorial {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .tutorial:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .forum {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .forum:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .creditos {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .creditos:hover {
              background: #ffb151;
              color: #fff;
            }
            .menu .contato {
              border: 1px solid transparent;
              border-bottom: 3px solid rgba(255, 255, 255, 1);
            }
            .menu .contato:hover {
              background: #ffb151;
              color: #fff;
            }

            .selected {
              background: #ffb151;
            }

            .logo-rosto {
              position: absolute;
              width: 148px;
              height: 98px;
            }
            .logo-sol {
              width: 148px;
              height: 98px;
            }

            button,
            input {
              top: 6px;
              left: 7px;
            }
          }
        `}</style>
      </nav>
    );
  }
}

function HeaderItem ({ children, href, selected, to }) {
  const isSelected = selected === to ? "selected" : ""
  return (
    <>
      <li className={`${to} ${isSelected}`}>
        <HeaderLink href={href}>
          {children}
        </HeaderLink>        
      </li>
      <style jsx>{
        `          
          li {
            display: inline-block;
            padding: 10px;
            width: 100px;
            font-size: 0.8em;
            text-align: center;
            margin-left: 1px;
            border: 1px solid transparent;
            border-top: 4px solid rgba(24, 65, 109, 0.15);
          }
          li:hover {
            background: #ffb151;
            color: #fff;
            cursor: pointer;
          }
          li.selected {
            background: #ffb151;
          }
        `
      }</style>
    </>
  )
}

function HeaderLink ({ children, href }) {
  if (href) {
    return (
      <>
        <Link href={href} passHref>
          <a>{children}</a>
        </Link>
        <style jsx>{
          `
            a {
              color: #333 !important;
              text-decoration: none;
              display: block;
            }
          `
        }</style>
      </>
    )
  }
  return children
}

export default Header;
