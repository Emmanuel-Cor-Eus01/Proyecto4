import repara from "../assets/images/repara.png";
import red from "../assets/images/red.png";
import instalacion from "../assets/images/instalacion.png";
function CardServ() {
    return (
        <>
            <div className="row">
                <div className="card col-md-4 text-center">
                    <img src={repara} className="card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Mantenimiento de computadoras</h5>
                        <p className="card-text">Brindamos nuestros servicios de mantemiento a equipos de computo, para un
                            mejor desempeño de su equipo, asi mismo tambien podemos hacer cambio y actualizacion de componentes.</p>
                    </div>
                </div>
                <div className="card col-md-4 text-center">
                    <img src={red} className="card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Distribucion de internet</h5>
                        <p className="card-text">Dentro de nuestros servicios se encentra la distrubucion del internet por todo su domilicio o negocio.</p>
                    </div>
                </div>
                <div className="card col-md-4 text-center">
                    <img src={instalacion} className="card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Instalacion de Software</h5>
                        <p className="card-text">Instalamos en su equipo el software que necesite ya sea para el trabajo o para la escuela.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardServ;