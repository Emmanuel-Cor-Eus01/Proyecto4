import CardChoice from "../components/Card-choice";
import Card from "../components/Card-serv";
function Home() {
    return (
        <>
            <div className="banner text-center">
                <div className="content">
                <h1 className="h1">SERVICIO TECNICO Y VENTA DE PRODUCTOS ELECTRONICOS</h1>
                </div>
            </div>
            <div className="services col-xs-12 col-md-12">
                <div className="cont-serv text-center">
                    <h2 className="serv">SERVICIOS</h2>
                    <Card className="card" titSer1="Mantenimiento de computadoras" titSer2="Distribucion de internet" titSer3="Instalacion de Software"></Card>
                </div>
            </div>
            <div className="choice col-xs-12 col-md-12">
                <div className="cont-choi text-center">
                    <h2 className="chice">¿Por que elegirnos?</h2>
                    <CardChoice className="card" titCar1="Experiencia" titCar2="Asesoría" titCar3="Maxima Garantía"></CardChoice>
                </div>
            </div>
        </>
     );
}

export default Home;