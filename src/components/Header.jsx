function Header() {
    return ( 
        <>
        <h1>Header</h1>
        <header>
                <div>
                    <div className="header-logo">
                        <img className="logo" src="assets/images/logo.png" alt="La imagen no cargo correctamente" />
                    </div>
                    <div className="header-title">
                        <h1>S H E L L</h1>
                    </div>
                    <div className="header-nav">
                        <nav className="nav">
                            <a href>Inicio</a>
                            <a href>Nosotros</a>
                            <a href>Productos</a>
                            <a href>Contacto</a>
                            <a href>Unete</a>
                        </nav>
                    </div></div>

        </header>
</>
     );
}
export default Header;