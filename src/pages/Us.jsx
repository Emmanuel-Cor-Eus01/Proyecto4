import FormVisit from "../components/FormVisit";
import logo from "../assets/images/logo.png";
function Us() {
    return ( 
        <>
            <div>
                <div className="Us">
                    <div className="row cont-us text-center">
                        <div className="img-container col-md-6">
                            <img className="logo-us" src={logo} alt="la imagen no cargo correctamente" />
                        </div>
                        <div className="text-container col-md-6 text-center">
                            <h1>¿QUIENES SOMOS?</h1>
                            <p>Somos un local dedicado a la venta de productos y servios electronicos,
                                contamos con 4 años de experiencia. Dentro de nuestros servicios que ofrecemos
                                se encuentra el mantenimiento de equipos de computo, asi como el cambio de componentes
                                e instalacion de software.
                            </p>
                        </div>
                        <div className="trabajos-container row">
                            <h2 className="mb-4">Trabajos de mantenimiento a equipos de computo</h2>
                            <div className="vid col-md-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7pjnURHAsb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="vid col-md-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QOmeIJ5LJh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="opinion">La opinion de nuestros clientes</div>
                        <div className="cita row">
                            <div className="content-cita">
                                <h1 className="title-cita text-center">Programar Visita tecnica</h1>
                                <p className="p-cita text-center">Programe una visita tecnica si desea que hagamos el presupuesto para la instalacion de los puntos de acceso de intenet
                                    de su domicilio o trabajo, tambien si desea que un tecnico vaya por su equipo de computo a reparar.
                                </p>
                                <FormVisit></FormVisit>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
            );
}

export default Us;