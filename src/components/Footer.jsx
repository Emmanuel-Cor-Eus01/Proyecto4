function Footer() {
    return ( 
        <>
        <h1>Footer</h1>
        <footer>
                <div className="cfoot">
                    <div className="fotlog">
                        <img className="logo2" src="assets/images/logo.png" alt="Logo" />
                    </div>
                    <div className="enlaces">
                        <div className="cont-enl">
                            <a href>Nosotros</a>
                        </div>
                        <div className="cont-enl">
                            <a href>Productos</a>
                        </div>
                        <div className="cont-enl">
                            <a href>Contacto</a>
                        </div>
                        <div className="cont-enl">
                            <a href>Unete</a>
                        </div>
                    </div>
                    <div className="social">
                        <div className="cont-soc">
                            <a href="https://www.facebook.com/"><img className="network-img" src="assets/images/fb.png" alt="FB" /></a>
                        </div>
                        <div className="cont-soc">
                            <a href="https://www.instagram.com/"><img className="network-img" src="assets/images/ig.png" alt="IG" /></a>
                        </div>
                        <div className="cont-soc">
                            <a href="https://twitter.com/"><img className="network-img" src="assets/images/tw.png" alt="TW" /></a>
                        </div>
                    </div>
                </div>

        </footer>
        </>
     );
}

export default Footer;