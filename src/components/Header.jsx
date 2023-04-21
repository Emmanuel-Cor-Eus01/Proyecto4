import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Header() {
    return ( 
        <>
        <header>
                <div className="header-wrapper">
                    <div className="header-logo">
                        <img className="logo" src={logo} alt="La imagen no cargo correctamente" />
                    </div>
                    <div className="header-title">
                        <h1>S H E L L</h1>
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