import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; 
import fb from "../assets/images/fb.png"; 
import ig from "../assets/images/ig.png"; 
import tw from "../assets/images/tw.png"; 
 function Footer() {
    return ( 
        <>
        <footer className="foot">
                <div className="cfoot">
                    <div className="fotlog">
                        <img className="logo2" src={logo} alt="Logo" />
                    </div>
                    <div className="enlaces">
                        <div className="cont-enl">
                            <Link to={'/Us'}>Nosotros</Link>
                        </div>
                        <div className="cont-enl">
                            <Link to={'/Store'}>Productos</Link>
                        </div>
                        <div className="cont-enl">
                            <Link to={'/Contact'}>Contacto</Link>
                        </div>
                        <div className="cont-enl">
                            <Link to={'/Register'}>Unete</Link>
                        </div>
                    </div>
                    <div className="social">
                        <div className="cont-soc">
                            <a href="https://www.facebook.com/"><img className="network-img" src={fb} alt="FB" /></a>
                        </div>
                        <div className="cont-soc">
                            <a href="https://www.instagram.com/"><img className="network-img" src={ig} alt="IG" /></a>
                        </div>
                        <div className="cont-soc">
                            <a href="https://twitter.com/"><img className="network-img" src={tw} alt="TW" /></a>
                        </div>
                    </div>
                </div>

        </footer>
        </>
     );
}

export default Footer;