function CardChoice(props) {
    return ( 
        <>
        <div className="row">
            <div className="card col-md-4 text-center">
                <div className="card-body">
                    <h5 className="card-title">{props.titCar1}</h5>
                    <p className="card-text">Contamos con 4 años de esperiencia brandando Mantenimiento a equipos de 
                    computo e impresoras.</p>
                </div>
            </div>
            <div className="card col-md-4 text-center">
                <div className="card-body">
                    <h5 className="card-title">{props.titCar2}</h5>
                    <p className="card-text">Le brindamos la mejor asesoria para la adquicision o actualizacion de su equipo de computo.</p>
                </div>
            </div>
            <div className="card col-md-4 text-center">
                <div className="card-body">
                    <h5 className="card-title">{props.titCar3}</h5>
                    <p className="card-text">Maxima garantia y respaldo en nuestros servicios.</p>
                </div>
            </div>
        </div>
    </>
     );
}

export default CardChoice;