import logo from "../assets/images/logo.png";
function Contact() {
    return ( 
        <>
            <div className="contact row">
                <div className="col-md-6 text-center">
                    <img className="logo-contact" src={logo} alt="la imagen no cargo correctamente" />
                </div>
                <div className="info col-md-6">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">TELEFONO</h5>
                            <p className="card-text">155 155 78 32</p>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">DIRECCION</h5>
                            <p className="card-text">10060 No 5 Rd, Richmond, BC V7A 4E5, Canadá</p>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">CORREO</h5>
                            <p className="card-text">CONTACTO-SHELL@SHEL.COM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d36147.62921753477!2d-123.14908163738505!3d49.13976667188362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMAPS!5e0!3m2!1ses!2smx!4v1683155670762!5m2!1ses!2smx" width={1530} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </>
     );
}

export default Contact;