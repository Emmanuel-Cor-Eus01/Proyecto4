import aro from "../assets/images/aro 14.jpg";
import bocina from "../assets/images/bocina.jpg";
import luzRgb from "../assets/images/luz rgb.jpg";
import neonFlexible from "../assets/images/neon flexible.jpg";
import stn from "../assets/images/stn.jpg";
import sony from "../assets/images/sony.jpg";
function Store() {
    return ( 
        <>
            <div className="Store row text-center">
                <h1 className="title-store mt-4 mb-4">Nuestros Productos</h1>
                <div className="card col-md-4 text-center">
                    <img src={aro} className=" card-store card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Aro de 14 pulgadas</h5>
                        <p className="card-text">Aro de luz con soporte para 3 celulares, 3 combinaciones de luz:
                        luz calida, luz fria y combinacion de ambas</p>
                    </div>
                </div>
                <div className="card col-xs-4 col-md-4 text-center">
                    <img src={bocina} className=" card-store card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Bocinas</h5>
                        <p className="card-text">Bocinas bluethooth de colores, excelente audio, disponible en color: negro, rosa, azul,
                        rojo y verde </p>
                    </div>
                </div>
                <div className="card col-xs-4 col-md-4 text-center">
                    <img src={luzRgb} className="card-store card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Luz RGB</h5>
                        <p className="card-text">Luz rgb de 5 mts con control remoto para cambio de luz e intensidad.</p>
                    </div>
                </div>
                <div className="card col-xs-4 col-md-4 text-center">
                    <img src={neonFlexible} className="card-store card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Luz neon flexible</h5>
                        <p className="card-text">Luz de neon flexible de 5 mts. disponible en color: verde, morado, azul, rosa, rojo y amarillo</p>
                    </div>
                </div>
                <div className="card col-xs-4 col-md-4 text-center">
                    <img src={stn} className="card-store card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Audifonos STN</h5>
                        <p className="card-text">Audifonos Bluethooth, con ranura para microSD y modo radio, trae sus controladores para pausar o cambiar de cancion y contol de volumen.</p>
                    </div>
                </div>
                <div className="card col-xs-4 col-md-4 text-center">
                    <img src={sony} className="card-store card-img-top" alt="La imagen no cargo correctamente card" />
                    <div className="card-body">
                        <h5 className="card-title">Audifonos Sonny</h5>
                        <p className="card-text">Audifonos Bluethooth, con ranura para microSD y modo radio, trae sus controladores para pausar o cambiar de cancion y contol de volumen.</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Store;