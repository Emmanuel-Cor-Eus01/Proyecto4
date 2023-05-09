import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Header(props) {
    return ( 
        <>
        <header>
                <div className="header-wrapper text-center">
                    <div className="header-logo">
                        <img className="logo" src={logo} alt="La imagen no cargo correctamente" />
                    </div>
                    <div className="header-title">
                        <h1>{props.titulo}</h1>
                    </div>
                    <div className="header-nav">
                        <nav className="nav">
                            <Link to={'/Home'}>Inicio</Link>
                            <Link to={'/Us'}>Nosotros</Link>
                            <Link to={'/Store'}>Productos</Link>
                            <Link to={'/Contact'}>Contacto</Link>
                            <Link to={'/Register'}>Unete</Link>
                        </nav>
                    </div></div>

        </header>
</>
     );
}
export default Header;